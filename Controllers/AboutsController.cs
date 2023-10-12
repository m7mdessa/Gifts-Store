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
    public class AboutsController : Controller
    {
		private readonly ModelContext _context;
		private readonly IWebHostEnvironment _webHostEnviroment;
		private readonly IEmailService _emailService;

		public AboutsController(ModelContext context, IWebHostEnvironment webHostEnviroment, IEmailService emailService)
		{
			_context = context;
			_webHostEnviroment = webHostEnviroment;
			_emailService = emailService;

		}
		// GET: Abouts
		public async Task<IActionResult> Index()
		{
			ViewBag.AName = HttpContext.Session.GetString("AName");
			ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
			var modelContext = _context.Abouts.Include(a => a.Home);
            return View(await modelContext.ToListAsync());
        }

        // GET: Abouts/Details/5
        public async Task<IActionResult> Details(decimal? id)
		{
			ViewBag.AName = HttpContext.Session.GetString("AName");
			ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
			if (id == null || _context.Abouts == null)
            {
                return NotFound();
            }

            var about = await _context.Abouts
                .Include(a => a.Home)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (about == null)
            {
                return NotFound();
            }

            return View(about);
        }

        // GET: Abouts/Create
        public IActionResult Create()
        {
			ViewBag.AName = HttpContext.Session.GetString("AName");
			ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
			ViewData["HomeId"] = new SelectList(_context.Homes, "Id", "Id");
            return View();
        }

        // POST: Abouts/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Contentt,ImageFile,HomeId")] About about)
        {
			if (ModelState.IsValid)
			{
				ViewBag.AName = HttpContext.Session.GetString("AName");
				ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
				string wwwRootPath = _webHostEnviroment.WebRootPath;
				if (about.ImageFile != null)
				{
					string fileName = Guid.NewGuid().ToString() + "_" + about.ImageFile.FileName;
					string path = Path.Combine(wwwRootPath, "images", fileName);

					using (var fileStream = new FileStream(path, FileMode.Create))
					{
						await about.ImageFile.CopyToAsync(fileStream);
					}
					if (!string.IsNullOrEmpty(about.Background))
					{
						var existingImagePath = Path.Combine(wwwRootPath, "images", about.Background);
						if (System.IO.File.Exists(existingImagePath))
						{
							System.IO.File.Delete(existingImagePath);
						}
					}
					about.Background = fileName;
					_context.Add(about);
					await _context.SaveChangesAsync();

				}

				return RedirectToAction(nameof(Index));
			}
			ViewData["HomeId"] = new SelectList(_context.Homes, "Id", "Id", about.HomeId);
            return View(about);
        }

        // GET: Abouts/Edit/5
        public async Task<IActionResult> Edit(decimal? id)
		{
			ViewBag.AName = HttpContext.Session.GetString("AName");
			ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
			if (id == null || _context.Abouts == null)
            {
                return NotFound();
            }

            var about = await _context.Abouts.FindAsync(id);
            if (about == null)
            {
                return NotFound();
            }
            ViewData["HomeId"] = new SelectList(_context.Homes, "Id", "Id", about.HomeId);
            return View(about);
        }

        // POST: Abouts/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(decimal id, [Bind("Id,Contentt,Background,ImageFile,HomeId")] About about)
        {
            if (id != about.Id)
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
					if (about.ImageFile != null)
					{
						string fileName = Guid.NewGuid().ToString() + "_" + about.ImageFile.FileName;
						string path = Path.Combine(wwwRootPath, "images", fileName);

						using (var fileStream = new FileStream(path, FileMode.Create))
						{
							await about.ImageFile.CopyToAsync(fileStream);
						}
						if (!string.IsNullOrEmpty(about.Background))
						{
							var existingImagePath = Path.Combine(wwwRootPath, "images", about.Background);
							if (System.IO.File.Exists(existingImagePath))
							{
								System.IO.File.Delete(existingImagePath);
							}
						}
						about.Background = fileName;
						_context.Update(about);
						await _context.SaveChangesAsync();

					}
				}
				catch (DbUpdateConcurrencyException)
				{
					if (!AboutExists(about.Id))
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
			ViewData["HomeId"] = new SelectList(_context.Homes, "Id", "Id", about.HomeId);
            return View(about);
        }

        // GET: Abouts/Delete/5
        public async Task<IActionResult> Delete(decimal? id)
		{
			ViewBag.AName = HttpContext.Session.GetString("AName");
			ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
			if (id == null || _context.Abouts == null)
            {
                return NotFound();
            }

            var about = await _context.Abouts
                .Include(a => a.Home)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (about == null)
            {
                return NotFound();
            }

            return View(about);
        }

        // POST: Abouts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(decimal id)
		{
			ViewBag.AName = HttpContext.Session.GetString("AName");
			ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
			if (_context.Abouts == null)
            {
                return Problem("Entity set 'ModelContext.Abouts'  is null.");
            }
            var about = await _context.Abouts.FindAsync(id);
            if (about != null)
            {
                _context.Abouts.Remove(about);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool AboutExists(decimal id)
        {
          return (_context.Abouts?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
