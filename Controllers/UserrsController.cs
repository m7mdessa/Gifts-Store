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
    public class UserrsController : Controller
    {
        private readonly ModelContext _context;
        private readonly IEmailService _emailService;

        public UserrsController(ModelContext context, IEmailService emailService)
        {
            _context = context;
            _emailService = emailService;

        }


        // GET: Userrs
        public async Task<IActionResult> Index()
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            var modelContext = _context.Userrs.Include(u => u.Category).Include(u => u.Role);
            return View(await modelContext.ToListAsync());
        }

        // GET: Userrs/Details/5
        public async Task<IActionResult> Details(decimal? id)

        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (id == null || _context.Userrs == null)
            {
                return NotFound();
            }

            var userr = await _context.Userrs
                .Include(u => u.Category)
                .Include(u => u.Role)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (userr == null)
            {
                return NotFound();
            }

            return View(userr);
        }

        // GET: Userrs/Create
        public IActionResult Create()
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            ViewData["CategoryId"] = new SelectList(_context.Categories, "Id", "Id");
            ViewData["RoleId"] = new SelectList(_context.Roles, "Id", "Id");
            return View();
        }

        // POST: Userrs/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Email,Username,Passwordd,Phone,RoleId,Status,Address,CategoryId")] Userr userr)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (ModelState.IsValid)
            {
                _context.Add(userr);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["CategoryId"] = new SelectList(_context.Categories, "Id", "Id", userr.CategoryId);
            ViewData["RoleId"] = new SelectList(_context.Roles, "Id", "Id", userr.RoleId);
            return View(userr);
        }

        // GET: Userrs/Edit/5
        public async Task<IActionResult> Edit(decimal? id)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (id == null || _context.Userrs == null)
            {
                return NotFound();
            }

            var userr = await _context.Userrs.FindAsync(id);
            if (userr == null)
            {
                return NotFound();
            }

            ViewData["CategoryId"] = new SelectList(_context.Categories, "Id", "Id", userr.CategoryId);
            var categoryId = userr.CategoryId;
            var specificCategory= _context.Categories.SingleOrDefault(r => r.Id == categoryId)?.CategoryName;
            ViewData["CategoryName"] = specificCategory;

            ViewData["RoleId"] = new SelectList(_context.Roles, "Id", "Id", userr.RoleId);
            var roleId = userr.RoleId;
            var specificRole = _context.Roles.SingleOrDefault(r => r.Id == roleId)?.Rolename;
            ViewData["Rolename"] = specificRole;

            return View(userr);
        }

        // POST: Userrs/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(decimal id, [Bind("Id,Email,Username,Passwordd,Phone,RoleId,Status,Address,CategoryId")] Userr userr)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (id != userr.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    

                        _context.Update(userr);
                        await _context.SaveChangesAsync();
                        if (userr.Status == "Accepted")
                        {
                            await _emailService.SendEmailAsync(userr.Email, "Request accepted", "Your request is accepted you good to go.");
                        }
                        if (userr.Status == "Rejected")

                        {
                            await _emailService.SendEmailAsync(userr.Email, "Request rejected", "Your request has been rejected sorry");


                        }
                    }
                
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserrExists(userr.Id))
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
            ViewData["RoleId"] = new SelectList(_context.Roles, "Id", "Id", userr.RoleId);
            return View(userr);
        }

        // GET: Userrs/Delete/5
        public async Task<IActionResult> Delete(decimal? id)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (id == null || _context.Userrs == null)
            {
                return NotFound();
            }

            var userr = await _context.Userrs
                .Include(u => u.Category)
                .Include(u => u.Role)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (userr == null)
            {
                return NotFound();
            }

            return View(userr);
        }

        // POST: Userrs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(decimal id)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (_context.Userrs == null)
            {
                return Problem("Entity set 'ModelContext.Userrs'  is null.");
            }
            var userr = await _context.Userrs.FindAsync(id);
            if (userr != null)
            {
                _context.Userrs.Remove(userr);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool UserrExists(decimal id)
        {
          return (_context.Userrs?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
