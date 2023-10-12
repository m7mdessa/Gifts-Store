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
    public class HomesController : Controller
    {
        private readonly ModelContext _context;
        private readonly IWebHostEnvironment _webHostEnviroment;
        private readonly IEmailService _emailService;

        public HomesController(ModelContext context, IWebHostEnvironment webHostEnviroment, IEmailService emailService)
        {
            _context = context;
            _webHostEnviroment = webHostEnviroment;
            _emailService = emailService;

        }

        // GET: Homes
        public async Task<IActionResult> Index()
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            return _context.Homes != null ? 
                          View(await _context.Homes.ToListAsync()) :
                          Problem("Entity set 'ModelContext.Homes'  is null.");
        }

        // GET: Homes/Details/5
        public async Task<IActionResult> Details(decimal? id)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (id == null || _context.Homes == null)
            {
                return NotFound();
            }

            var home = await _context.Homes
                .FirstOrDefaultAsync(m => m.Id == id);
            if (home == null)
            {
                return NotFound();
            }

            return View(home);
        }

        // GET: Homes/Create
        public IActionResult Create()
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            return View();
        }

        // POST: Homes/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Contentt,ImageLogo,ImageSlide1,ImageSlide2,ImageSlide3")] Home home)
        {
            if (ModelState.IsValid)
            {
                ViewBag.AName = HttpContext.Session.GetString("AName");
                ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
                string wwwRootPath = _webHostEnviroment.WebRootPath;
                if (home.ImageLogo != null)
                {
                    string fileName = Guid.NewGuid().ToString() + "_" + home.ImageLogo.FileName;
                    string path = Path.Combine(wwwRootPath, "images", fileName);

                    using (var fileStream = new FileStream(path, FileMode.Create))
                    {
                        await home.ImageLogo.CopyToAsync(fileStream);
                    }
                    home.Logo = fileName;

                    _context.Add(home);
                    await _context.SaveChangesAsync();

                }
                if (home.ImageSlide1 != null)
                {
                    string fileName = Guid.NewGuid().ToString() + "_" + home.ImageSlide1.FileName;
                    string path = Path.Combine(wwwRootPath, "images", fileName);

                    using (var fileStream = new FileStream(path, FileMode.Create))
                    {
                        await home.ImageSlide1.CopyToAsync(fileStream);
                    }


                    home.Slide1 = fileName;


                    _context.Add(home);
                    await _context.SaveChangesAsync();

                }
                if (home.ImageSlide2 != null)
                {
                    string fileName = Guid.NewGuid().ToString() + "_" + home.ImageSlide2.FileName;
                    string path = Path.Combine(wwwRootPath, "images", fileName);

                    using (var fileStream = new FileStream(path, FileMode.Create))
                    {
                        await home.ImageSlide2.CopyToAsync(fileStream);
                    }
                    home.Slide2 = fileName;

                    _context.Add(home);
                    await _context.SaveChangesAsync();

                }
                if (home.ImageSlide3 != null)
                {
                    string fileName = Guid.NewGuid().ToString() + "_" + home.ImageSlide3.FileName;
                    string path = Path.Combine(wwwRootPath, "images", fileName);

                    using (var fileStream = new FileStream(path, FileMode.Create))
                    {
                        await home.ImageSlide3.CopyToAsync(fileStream);
                    }

                    home.Slide3 = fileName;

                    _context.Add(home);
                    await _context.SaveChangesAsync();

                }

                return RedirectToAction(nameof(Index));
            }
            return View(home);
        }

        // GET: Homes/Edit/5
        public async Task<IActionResult> Edit(decimal? id)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (id == null || _context.Homes == null)
            {
                return NotFound();
            }

            var home = await _context.Homes.FindAsync(id);
            if (home == null)
            {
                return NotFound();
            }
            return View(home);
        }

        // POST: Homes/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(decimal id, [Bind("Id,Contentt,Slide1,Slide2,Slide3,Logo,ImageLogo,ImageSlide1,ImageSlide2,ImageSlide3")] Home home)
        {
            if (id != home.Id)
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
                    if (home.ImageLogo != null)
                    {
                        string fileName = Guid.NewGuid().ToString() + "_" + home.ImageLogo.FileName;
                        string path = Path.Combine(wwwRootPath, "images", fileName);

                        using (var fileStream = new FileStream(path, FileMode.Create))
                        {
                            await home.ImageLogo.CopyToAsync(fileStream);
                        }
                        if (!string.IsNullOrEmpty(home.Logo))
                        {
                            var existingImagePath = Path.Combine(wwwRootPath, "images", home.Logo);
                            if (System.IO.File.Exists(existingImagePath))
                            {
                                System.IO.File.Delete(existingImagePath);
                            }
                        }
                        home.Logo   = fileName;
                   
                        _context.Update(home);
                        await _context.SaveChangesAsync();

                    }
                    if (home.ImageSlide1 != null)
                    {
                        string fileName = Guid.NewGuid().ToString() + "_" + home.ImageSlide1.FileName;
                        string path = Path.Combine(wwwRootPath, "images", fileName);

                        using (var fileStream = new FileStream(path, FileMode.Create))
                        {
                            await home.ImageSlide1.CopyToAsync(fileStream);
                        }
                        
                        if (!string.IsNullOrEmpty(home.Slide1))
                        {
                            var existingImagePath = Path.Combine(wwwRootPath, "images", home.Slide1);
                            if (System.IO.File.Exists(existingImagePath))
                            {
                                System.IO.File.Delete(existingImagePath);
                            }
                        }
                 
                        home.Slide1 = fileName;
                   

                        _context.Update(home);
                        await _context.SaveChangesAsync();

                    }
                    if (home.ImageSlide2 != null)
                    {
                        string fileName = Guid.NewGuid().ToString() + "_" + home.ImageSlide2.FileName;
                        string path = Path.Combine(wwwRootPath, "images", fileName);

                        using (var fileStream = new FileStream(path, FileMode.Create))
                        {
                            await home.ImageSlide2.CopyToAsync(fileStream);
                        }
                 
                        if (!string.IsNullOrEmpty(home.Slide2))
                        {
                            var existingImagePath = Path.Combine(wwwRootPath, "images", home.Slide2);
                            if (System.IO.File.Exists(existingImagePath))
                            {
                                System.IO.File.Delete(existingImagePath);
                            }
                        }

                      
                        home.Slide2 = fileName;

                        _context.Update(home);
                        await _context.SaveChangesAsync();

                    }
                    if (home.ImageSlide3 != null)
                    {
                        string fileName = Guid.NewGuid().ToString() + "_" + home.ImageSlide3.FileName;
                        string path = Path.Combine(wwwRootPath, "images", fileName);

                        using (var fileStream = new FileStream(path, FileMode.Create))
                        {
                            await home.ImageSlide3.CopyToAsync(fileStream);
                        }
              
                        if (!string.IsNullOrEmpty(home.Slide3))
                        {
                            var existingImagePath = Path.Combine(wwwRootPath, "images", home.Slide3);
                            if (System.IO.File.Exists(existingImagePath))
                            {
                                System.IO.File.Delete(existingImagePath);
                            }
                        }

                 
                        home.Slide3 = fileName;

                        _context.Update(home);
                        await _context.SaveChangesAsync();

                    }

                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!HomeExists(home.Id))
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
            return View(home);
        }

        // GET: Homes/Delete/5
        public async Task<IActionResult> Delete(decimal? id)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (id == null || _context.Homes == null)
            {
                return NotFound();
            }

            var home = await _context.Homes
                .FirstOrDefaultAsync(m => m.Id == id);
            if (home == null)
            {
                return NotFound();
            }

            return View(home);
        }

        // POST: Homes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(decimal id)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (_context.Homes == null)
            {
                return Problem("Entity set 'ModelContext.Homes'  is null.");
            }
            var home = await _context.Homes.FindAsync(id);
            if (home != null)
            {
                _context.Homes.Remove(home);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool HomeExists(decimal id)
        {
          return (_context.Homes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
