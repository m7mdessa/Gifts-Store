using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Gifts_Store.Models;

namespace Gifts_Store.Controllers
{
    public class CategoriesController : Controller
    {
        private readonly ModelContext _context;
        private readonly IWebHostEnvironment _webHostEnviroment;
        private readonly IEmailService _emailService;

        public CategoriesController(ModelContext context, IWebHostEnvironment webHostEnviroment, IEmailService emailService)
        {
            _context = context;
            _webHostEnviroment = webHostEnviroment;
            _emailService = emailService;

        }

        // GET: Categories
        public async Task<IActionResult> Index()
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            return _context.Categories != null ? 
                          View(await _context.Categories.ToListAsync()) :
                          Problem("Entity set 'ModelContext.Categories'  is null.");
        }

        // GET: Categories/Details/5
        public async Task<IActionResult> Details(decimal? id)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (id == null || _context.Categories == null)
            {
                return NotFound();
            }

            var giftCategory = await _context.Categories
                .FirstOrDefaultAsync(m => m.Id == id);
            if (giftCategory == null)
            {
                return NotFound();
            }

            return View(giftCategory);
        }

        // GET: Categories/Create
        public IActionResult Create()
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            return View();
        }

        // POST: Categories/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,CategoryName,ImageFile,Imagepath")] Category Category)
        {
   
            if (ModelState.IsValid)
            {
                ViewBag.AName = HttpContext.Session.GetString("AName");
                ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
                string wwwRootPath = _webHostEnviroment.WebRootPath;
                if (Category.ImageFile != null)
                {
                    string fileName = Guid.NewGuid().ToString() + "_" + Category.ImageFile.FileName;
                    string path = Path.Combine(wwwRootPath, "images", fileName);

                    using (var fileStream = new FileStream(path, FileMode.Create))
                    {
                        await Category.ImageFile.CopyToAsync(fileStream);
                    }
                    if (!string.IsNullOrEmpty(Category.Imagepath))
                    {
                        var existingImagePath = Path.Combine(wwwRootPath, "images", Category.Imagepath);
                        if (System.IO.File.Exists(existingImagePath))
                        {
                            System.IO.File.Delete(existingImagePath);
                        }
                    }
                    Category.Imagepath = fileName;
                    _context.Add(Category);
                    await _context.SaveChangesAsync();

                }
           
                return RedirectToAction(nameof(Index));
            }
            return View(Category);
        }

        // GET: Categories/Edit/5
        public async Task<IActionResult> Edit(decimal? id)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (id == null || _context.Categories == null)
            {
                return NotFound();
            }

            var giftCategory = await _context.Categories.FindAsync(id);
            if (giftCategory == null)
            {
                return NotFound();
            }
            return View(giftCategory);
        }

        // POST: Categories/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(decimal id, [Bind("Id,CategoryName,ImageFile,Imagepath")] Category Category)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (id != Category.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    ViewBag.AName = HttpContext.Session.GetString("AName");
                    ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
                    string wwwRootPath = _webHostEnviroment.WebRootPath;
                    if (Category.ImageFile != null)
                    {
                        string fileName = Guid.NewGuid().ToString() + "_" + Category.ImageFile.FileName;
                        string path = Path.Combine(wwwRootPath, "images", fileName);

                        using (var fileStream = new FileStream(path, FileMode.Create))
                        {
                            await Category.ImageFile.CopyToAsync(fileStream);
                        }
                        if (!string.IsNullOrEmpty(Category.Imagepath))
                        {
                            var existingImagePath = Path.Combine(wwwRootPath, "images", Category.Imagepath);
                            if (System.IO.File.Exists(existingImagePath))
                            {
                                System.IO.File.Delete(existingImagePath);
                            }
                        }
                        Category.Imagepath = fileName;
                        _context.Update(Category);
                        await _context.SaveChangesAsync();

                    }
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!GiftCategoryExists(Category.Id))
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
            return View(Category);
        }

        // GET: Categories/Delete/5
        public async Task<IActionResult> Delete(decimal? id)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (id == null || _context.Categories == null)
            {
                return NotFound();
            }

            var giftCategory = await _context.Categories
                .FirstOrDefaultAsync(m => m.Id == id);
            if (giftCategory == null)
            {
                return NotFound();
            }

            return View(giftCategory);
        }

        // POST: Categories/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(decimal id)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (_context.Categories == null)
            {
                return Problem("Entity set 'ModelContext.Categories'  is null.");
            }
            var giftCategory = await _context.Categories.FindAsync(id);
            if (giftCategory != null)
            {
                _context.Categories.Remove(giftCategory);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool GiftCategoryExists(decimal id)
        {
          return (_context.Categories?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
