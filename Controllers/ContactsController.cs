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
    public class ContactsController : Controller
    {
        private readonly ModelContext _context;

        public ContactsController(ModelContext context)
        {
            _context = context;
        }

        // GET: Contacts
        public async Task<IActionResult> Index()
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            var modelContext = _context.Contacts.Include(c => c.Home);
            return View(await modelContext.ToListAsync());
        }

        // GET: Contacts/Details/5
        public async Task<IActionResult> Details(decimal? id)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (id == null || _context.Contacts == null)
            {
                return NotFound();
            }

            var contact = await _context.Contacts
                .Include(c => c.Home)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (contact == null)
            {
                return NotFound();
            }

            return View(contact);
        }

        // GET: Contacts/Create
        public IActionResult Create()
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            ViewData["HomeId"] = new SelectList(_context.Homes, "Id", "Id");
            return View();
        }

        // POST: Contacts/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Namee,Email,Phone,Subject,Message,DateCreated,HomeId")] Contact contact)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (ModelState.IsValid)
            {
                _context.Add(contact);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["HomeId"] = new SelectList(_context.Homes, "Id", "Id", contact.HomeId);
            return View(contact);
        }

        // GET: Contacts/Edit/5
        public async Task<IActionResult> Edit(decimal? id)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (id == null || _context.Contacts == null)
            {
                return NotFound();
            }

            var contact = await _context.Contacts.FindAsync(id);
            if (contact == null)
            {
                return NotFound();
            }
            ViewData["HomeId"] = new SelectList(_context.Homes, "Id", "Id", contact.HomeId);
            return View(contact);
        }

        // POST: Contacts/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(decimal id, [Bind("Id,Namee,Email,Phone,Subject,Message,DateCreated,HomeId")] Contact contact)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (id != contact.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(contact);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ContactExists(contact.Id))
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
            ViewData["HomeId"] = new SelectList(_context.Homes, "Id", "Id", contact.HomeId);
            return View(contact);
        }

        // GET: Contacts/Delete/5
        public async Task<IActionResult> Delete(decimal? id)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (id == null || _context.Contacts == null)
            {
                return NotFound();
            }

            var contact = await _context.Contacts
                .Include(c => c.Home)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (contact == null)
            {
                return NotFound();
            }

            return View(contact);
        }

        // POST: Contacts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(decimal id)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            if (_context.Contacts == null)
            {
                return Problem("Entity set 'ModelContext.Contacts'  is null.");
            }
            var contact = await _context.Contacts.FindAsync(id);
            if (contact != null)
            {
                _context.Contacts.Remove(contact);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ContactExists(decimal id)
        {
          return (_context.Contacts?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
