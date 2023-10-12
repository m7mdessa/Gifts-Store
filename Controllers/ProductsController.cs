using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Gifts_Store.Models;
using System.Diagnostics;
using Microsoft.AspNetCore.Hosting;

namespace Gifts_Store.Controllers
{
    public class ProductsController : Controller
    {
        private readonly ModelContext _context;
        private readonly IWebHostEnvironment _webHostEnviroment;
        private readonly IEmailService _emailService;

        public ProductsController(ModelContext context, IWebHostEnvironment webHostEnviroment, IEmailService emailService)
        {
            _context = context;
            _webHostEnviroment = webHostEnviroment;
            _emailService = emailService;

        }

        // GET: Products

        public IActionResult Index()
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");

     
            var makerId = HttpContext.Session.GetInt32("MakerId");
            var categoryId = HttpContext.Session.GetInt32("MakerCategoryId");
            var categoryName = _context.Categories
               .Where(c => c.Id == categoryId)
               .Select(c => c.CategoryName)
               .SingleOrDefault();

            ViewData["CategoryName"] = categoryName;

            if (makerId != null)
            {
                var orders = _context.Products.Where(p => p.UserId == makerId).ToList();
                return View(orders);
            }
            
            else
            {
                return View(new List<Product>());
            }


        }


        // GET: Products/Details/5
        public async Task<IActionResult> Details(decimal? id)
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
            if (id == null || _context.Products == null)
            {
                return NotFound();
            }

            var giftProduct = await _context.Products
                .Include(g => g.Category)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (giftProduct == null)
            {
                return NotFound();
            }

            return View(giftProduct);
        }

        // GET: Products/Create
        public IActionResult Create()
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
            var categoryId = HttpContext.Session.GetInt32("MakerCategoryId");

            var categoryName = _context.Categories
                .Where(c => c.Id == categoryId)
                .Select(c => c.CategoryName)
                .SingleOrDefault();

            ViewData["CategoryName"] = categoryName;
            ViewData["CategoryId"] = categoryId;


            return View();
        }


        // POST: Products/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Namee,Descc,Sale,Price,Quantity,UserId,ImageFile,CategoryId")] Product Product)
        {
            if (ModelState.IsValid)
            {
                ViewBag.MName = HttpContext.Session.GetString("MName");
                ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
                string wwwRootPath = _webHostEnviroment.WebRootPath;
                if (Product.ImageFile != null)
                {
                    string fileName = Guid.NewGuid().ToString() + "_" + Product.ImageFile.FileName;
                    string path = Path.Combine(wwwRootPath, "images", fileName);

                    using (var fileStream = new FileStream(path, FileMode.Create))
                    {
                        await Product.ImageFile.CopyToAsync(fileStream);
                    }
                    if (!string.IsNullOrEmpty(Product.Imagepath))
                    {
                        var existingImagePath = Path.Combine(wwwRootPath, "images", Product.Imagepath);
                        if (System.IO.File.Exists(existingImagePath))
                        {
                            System.IO.File.Delete(existingImagePath);
                        }
                    }
                    Product.Imagepath = fileName;
                    _context.Add(Product);
                    await _context.SaveChangesAsync();

                }
                return RedirectToAction(nameof(Index));
            }
            return View(Product);
        }

        // GET: Products/Edit/5
        public async Task<IActionResult> Edit(decimal? id)
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
            var categoryId = HttpContext.Session.GetInt32("MakerCategoryId");

            if (id == null || _context.Products == null)
            {
                return NotFound();
            }

            var giftProduct = await _context.Products.FindAsync(id);
            if (giftProduct == null)
            {
                return NotFound();
            }

            var categoryName = _context.Categories
                .Where(c => c.Id == categoryId)
                .Select(c => c.CategoryName)
                .SingleOrDefault();

            ViewData["CategoryName"] = categoryName;
            ViewData["CategoryId"] = categoryId;
            return View(giftProduct);
        }

        // POST: Products/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(decimal id, [Bind("Id,Namee,Descc,Sale,Price,Quantity,UserId,Imagepath,ImageFile,CategoryId")] Product Product)
        {
            if (id != Product.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                ViewBag.MName = HttpContext.Session.GetString("MName");
                ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
                try
                {
                    string wwwRootPath = _webHostEnviroment.WebRootPath;
                    if (Product.ImageFile != null)
                    {
                        string fileName = Guid.NewGuid().ToString() + "_" + Product.ImageFile.FileName;
                        string path = Path.Combine(wwwRootPath, "images", fileName);

                        using (var fileStream = new FileStream(path, FileMode.Create))
                        {
                            await Product.ImageFile.CopyToAsync(fileStream);
                        }
                        if (!string.IsNullOrEmpty(Product.Imagepath))
                        {
                            var existingImagePath = Path.Combine(wwwRootPath, "images", Product.Imagepath);
                            if (System.IO.File.Exists(existingImagePath))
                            {
                                System.IO.File.Delete(existingImagePath);
                            }
                        }
                        Product.Imagepath = fileName;
                        _context.Update(Product);
                        await _context.SaveChangesAsync();
                    }
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!GiftProductExists(Product.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["CategoryId"] = new SelectList(_context.Categories, "Id", "Id", Product.CategoryId);
            return View(Product);
        }

        // GET: Products/Delete/5
        public async Task<IActionResult> Delete(decimal? id)
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
            if (id == null || _context.Products == null)
            {
                return NotFound();
            }

            var giftProduct = await _context.Products
                .Include(g => g.Category)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (giftProduct == null)
            {
                return NotFound();
            }

            return View(giftProduct);
        }

        // POST: Products/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(decimal id)
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
            if (_context.Products == null)
            {
                return Problem("Entity set 'ModelContext.Products'  is null.");
            }
            var giftProduct = await _context.Products.FindAsync(id);
            if (giftProduct != null)
            {
                _context.Products.Remove(giftProduct);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool GiftProductExists(decimal id)
        {
          return (_context.Products?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
