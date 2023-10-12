using Gifts_Store.Models;
using iTextSharp.text;
using iTextSharp.text.pdf;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;

namespace Gifts_Store.Controllers
{
    public class MakerController : Controller
    {
        private readonly ModelContext _context;
        private readonly IEmailService _emailService;

        public MakerController(ModelContext context, IEmailService emailService)
        {

            _context = context;
            _emailService = emailService;

        }
        public IActionResult Index()
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
            var makerId = HttpContext.Session.GetInt32("MakerId");

            ViewBag.Notifications = _context.Notifications.Where(o => o.UserId == makerId).Count();
			ViewBag.Sales = _context.Products.Where(o => o.UserId == makerId).Sum(x => x.Sale * x.Price);
			ViewBag.Gifts = _context.Products.Where(o => o.UserId == makerId).Count();

            if (makerId != null)
            {
                var orders = _context.Notifications.Where(o => o.UserId == makerId).ToList();
                return View(orders);
            }
            else
            {
                return View(new List<Notification>());
            }

        }
        public IActionResult Testimonial()
        {

            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
            return View();

        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Testimonial([Bind("Id,Namee,Content,Status,DateTestimonial,UserId")] Testimonial testimonial)
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");

            if (ModelState.IsValid)
            {
              

                testimonial.Status = "pending";
                testimonial.DateTestimonial = DateTime.Now;

                _context.Add(testimonial);

                await _context.SaveChangesAsync();





                return RedirectToAction(nameof(yourTestimonial));




            }

            return View(testimonial);
        }



        public IActionResult yourTestimonial()
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
            var makerId = HttpContext.Session.GetInt32("MakerId");

            if (makerId != null)
            {
                var testimonials = _context.Testimonials.Where(o => o.UserId == makerId).ToList();
                return View(testimonials);
            }
            else
            {
                return View(new List<Testimonial>());
            }

        }

        public async Task<IActionResult> editprofile()
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
            var makerId = HttpContext.Session.GetInt32("MakerId"); 


            var userrs = await _context.Userrs.SingleOrDefaultAsync(m => m.Id == makerId);


            if (userrs == null)
            {
                return NotFound();
            }
            var categoryId = userrs.CategoryId;
            var specificCategory = _context.Categories.SingleOrDefault(r => r.Id == categoryId)?.CategoryName;
            ViewData["CategoryName"] = specificCategory;

            var roleId = userrs.RoleId;
            var specificRole = _context.Roles.SingleOrDefault(r => r.Id == roleId)?.Rolename;
            ViewData["Rolename"] = specificRole;


            return View(userrs);

        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> editprofile(decimal id, [Bind("Id,Email,Username,Passwordd,Address,Phone,RoleId,Status,CategoryId")] string newPass, string rPass, Userr userrs)
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
            if (id != userrs.Id)
            {
                return NotFound();
            }
            if (ModelState.IsValid)
            {
                try
                {
           

                    if (newPass == rPass)
                    {
                        userrs.Passwordd = newPass;
                    }

                    _context.Update(userrs);

                    TempData["UpdateMessage"] = "Profile updated successfully.";

                    await _context.SaveChangesAsync();

                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserrExists(userrs.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(editprofile));

            }
            return View(userrs);
        }
        private bool UserrExists(decimal id)
        {
            throw new NotImplementedException();
        }
        // GET: Notifications/Details/5
        public async Task<IActionResult> Details(decimal? id)
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
            if (id == null || _context.Notifications == null)
            {
                return NotFound();
            }

            var Notification = await _context.Notifications
            .Include(n => n.Order)
            .Include(n => n.User)
            .FirstOrDefaultAsync(m => m.Id == id);
            if (Notification == null)
            {
                return NotFound();
            }

            return View(Notification);
        }

        // GET: Notifications/Create
        public IActionResult Create()
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
            ViewData["OrderId"] = new SelectList(_context.Orderrs, "Id", "Id");
            ViewData["UserId"] = new SelectList(_context.Userrs, "Id", "Email");

            return View();
        }

        // POST: Notifications/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,ProductId,Username,Quantity,ProductName,Email,Address,CategoryName,Price,DateOrder,OrderId,Status,UserId")] Notification Notification)
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
            if (ModelState.IsValid)
            {
                _context.Add(Notification);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["UserId"] = new SelectList(_context.Userrs, "Id", "Email", Notification.UserId);
            ViewData["OrderId"] = new SelectList(_context.Orderrs, "Id", "Id", Notification.OrderId);

            return View(Notification);
        }

        // GET: Notifications/Edit/5
        public async Task<IActionResult> Edit(decimal? id)
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
            if (id == null || _context.Notifications == null)
            {
                return NotFound();
            }

            var Notification = await _context.Notifications.FindAsync(id);
            if (Notification == null)
            {
                return NotFound();
            }
            ViewData["UserId"] = new SelectList(_context.Userrs, "Id", "Email", Notification.UserId);
            ViewData["OrderId"] = new SelectList(_context.Orderrs, "Id", "Id", Notification.OrderId);

            return View(Notification);
        }

        // POST: Notifications/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(decimal id, [Bind("Id,ProductId,Username,Quantity,ProductName,Email,CategoryName,Price,Address,DateOrder,Status,OrderId,UserId")] Notification Notification)
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
            if (id != Notification.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(Notification);
                    await _context.SaveChangesAsync();

                    if (Notification.Status == "Confirmed")

                        {
						var callbackUrl = Url.Action("Pay", "Sender", new { notificationId = Notification.Id }, protocol: HttpContext.Request.Scheme);
						string buttonHtml = $"<a href=\"{callbackUrl}\" style=\"display: inline-block; background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;\">Click here to proceed to payment</a>";
						await _emailService.SendEmailAsync(Notification.Email, "Request Confirmed", $"To proceed with payment, {buttonHtml}");

					}



				}
                catch (DbUpdateConcurrencyException)
                {
                    if (!NotificationExists(Notification.Id))
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
            ViewData["UserId"] = new SelectList(_context.Userrs, "Id", "Email", Notification.UserId);
            ViewData["OrderId"] = new SelectList(_context.Orderrs, "Id", "Id", Notification.OrderId);

            return View(Notification);
        }




        // GET: Notifications/Delete/5
        public async Task<IActionResult> Delete(decimal? id)
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
            if (id == null || _context.Notifications == null)
            {
                return NotFound();
            }

            var Notification = await _context.Notifications
                .Include(n => n.Order)
                .Include(n => n.User)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (Notification == null)
            {
                return NotFound();
            }

            return View(Notification);
        }

        // POST: Notifications/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(decimal id)
        {
            ViewBag.MName = HttpContext.Session.GetString("MName");
            ViewBag.ID = HttpContext.Session.GetInt32("MakerId");
            if (_context.Notifications == null)
            {
                return Problem("Entity set 'ModelContext.Notifications'  is null.");
            }
            var Notification = await _context.Notifications.FindAsync(id);
            if (Notification != null)
            {
                _context.Notifications.Remove(Notification);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool NotificationExists(decimal id)
        {
            return (_context.Notifications?.Any(e => e.Id == id)).GetValueOrDefault();
        }

    }
}
