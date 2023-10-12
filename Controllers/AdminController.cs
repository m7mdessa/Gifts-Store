using Gifts_Store.Models;
using iTextSharp.text;
using iTextSharp.text.pdf;
using MailKit.Search;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Org.BouncyCastle.Asn1.X509;

namespace Gifts_Store.Controllers
{
    public class AdminController : Controller
    {
        private readonly ModelContext _context;
        private readonly IWebHostEnvironment _webHostEnviroment;

        public AdminController(ModelContext context, IWebHostEnvironment webHostEnviroment)
        {
            _context = context;
            _webHostEnviroment = webHostEnviroment;
        }
        public IActionResult Index()
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");

            ViewBag.Userrs = _context.Userrs.Count();
            ViewBag.Categories = _context.Categories.Count();
            ViewBag.Sales = _context.Products.Sum(x => x.Sale * x.Price);
            ViewBag.Gifts = _context.Products.Count();
            var userrs = _context.Userrs.ToList();
            var products = _context.Products.ToList();
            var orderrs = _context.Orderrs.ToList();
            var categories = _context.Categories.ToList();
            var model = from u in userrs
                        join o in orderrs on u.Id equals o.UserId
                        join p in products on o.ProductId equals p.Id
                        join cat in categories on p.CategoryId equals cat.Id
                        select new Report
                        {
                            Userr = u,
                            Orderr = o,
                            product = p,
                            Category = cat
                        };

            ViewBag.Quantity = model.Sum(x => x.Orderr.Quantity);
            ViewBag.TotalPrice = model.Sum(x => x.Orderr.Quantity * x.product.Price);
            ViewBag.Profits = model.Sum(x => x.Orderr.Totalprice * 0.05m);

            var chartData = new
            {
                labels = new[] { "January", "February", "March", "April", "May", "June", "July" },
                profits = model.Select(x => x.Orderr.Totalprice * 0.05m).ToArray(),
                totalPrices = model.Select(x => x.Orderr.Quantity * x.product.Price).ToArray(),
                quantities = model.Select(x => x.Orderr.Quantity).ToArray(),

        };

            ViewBag.ChartData = JsonConvert.SerializeObject(chartData);
            var users = _context.Userrs.ToList();
            var finalModel = Tuple.Create<IEnumerable<Report>, IEnumerable<Userr>, dynamic>(model, users, chartData);
            return View(finalModel);

        }


        public async Task<IActionResult> editprofile()
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");

            var Id = HttpContext.Session.GetInt32("AdminId");


            var userrs = await _context.Userrs.SingleOrDefaultAsync(m => m.Id == Id);


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
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");

            if (id != userrs.Id)
            {
                return NotFound();
            }
            if (ModelState.IsValid)
            {
                try
                {

                    userrs.CategoryId = null;
                    userrs.RoleId = 3;
                    userrs.Status = "Accepted";
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
        public IActionResult Reports()
        {
      

            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");

            var userrs = _context.Userrs.ToList();
            var products = _context.Products.ToList();
            var orderrs = _context.Orderrs.ToList();
            var categories = _context.Categories.ToList();
            var model = from u in userrs
                        join o in orderrs on u.Id equals o.UserId
                        join p in products on o.ProductId equals p.Id
                        join cat in categories on p.CategoryId equals cat.Id
                        select new Report
                        {
                            Userr = u,
                            Orderr = o,
                            product = p,
                            Category = cat
                        };

            ViewBag.Quantity = model.Sum(x => x.Orderr.Quantity);
            ViewBag.TotalPrice = model.Sum(x => x.Orderr.Quantity * x.product.Price);
            ViewBag.Profits = model.Sum(x => x.Orderr.Totalprice * 0.05m);
         

            
            var users = _context.Userrs.ToList();
            var finalModel = Tuple.Create<IEnumerable<Report> , IEnumerable<Userr>>(model, users);
            return View(finalModel);
        }
        public IActionResult ChartReports()
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");

            var userrs = _context.Userrs.ToList();
            var products = _context.Products.ToList();
            var orderrs = _context.Orderrs.ToList();
            var categories = _context.Categories.ToList();
            var model = from u in userrs
                        join o in orderrs on u.Id equals o.UserId
                        join p in products on o.ProductId equals p.Id
                        join cat in categories on p.CategoryId equals cat.Id
                        select new Report
                        {
                            Userr = u,
                            Orderr = o,
                            product = p,
                            Category = cat
                        };

            ViewBag.Quantity = model.Sum(x => x.Orderr.Quantity);
            ViewBag.TotalPrice = model.Sum(x => x.Orderr.Quantity * x.product.Price);
            ViewBag.Profits = model.Sum(x => x.Orderr.Totalprice * 0.05m);

            var chartData = new
            {
                labels = new[] { "January", "February", "March", "April", "May", "June", "July" },
                profits = model.Select(x => x.Orderr.Totalprice * 0.05m).ToArray(),
                totalPrices = model.Select(x => x.Orderr.Quantity * x.product.Price).ToArray(),
                quantities = model.Select(x => x.Orderr.Quantity).ToArray(),
            };

            ViewBag.ChartData = JsonConvert.SerializeObject(chartData);

            return View();
        }

        [HttpPost]
        public IActionResult Reports(DateTime? startDate, DateTime? endDate)
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");

            var userrs = _context.Userrs.ToList();
            var products = _context.Products.ToList();
            var orderrs = _context.Orderrs.ToList();
            var categories = _context.Categories.ToList();
            var model = from u in userrs
                        join o in orderrs on u.Id equals o.UserId
                        join p in products on o.ProductId equals p.Id
                        join cat in categories on p.CategoryId equals cat.Id
                        select new Report
                        {
                            Userr = u,
                            Orderr = o,
                            product = p,
                            Category = cat
                        };
            var users = _context.Userrs.ToList();
            if (startDate == null && endDate == null)
            {
                ViewBag.Quantity = model.Sum(x => x.Orderr.Quantity);
                ViewBag.TotalPrice = model.Sum(x => x.Orderr.Quantity * x.product.Price);
                ViewBag.Profits = model.Sum(x => x.Orderr.Totalprice * 0.05m);
                var finalModel = Tuple.Create<IEnumerable<Report>, IEnumerable<Userr>>(model, users);

                return View(finalModel);

            }
            else if (startDate == null && endDate != null)
            {
                var res = model.Where(x => x.Orderr.DateEnd <= endDate).ToList();
                ViewBag.Quantity = model.Sum(x => x.Orderr.Quantity);
                ViewBag.TotalPrice = model.Sum(x => x.Orderr.Quantity * x.product.Price);
                ViewBag.Profits = model.Sum(x => x.Orderr.Totalprice * 0.05m);
                var finalModel = Tuple.Create<IEnumerable<Report>, IEnumerable<Userr>>(res, users);

                return View(finalModel);
            }
            else if (startDate != null && endDate == null)
            {

                var res = model.Where(x => x.Orderr.DateOrder >= startDate).ToList();
                ViewBag.Quantity = model.Sum(x => x.Orderr.Quantity);
                ViewBag.TotalPrice = model.Sum(x => x.Orderr.Quantity * x.product.Price);
                ViewBag.Profits = model.Sum(x => x.Orderr.Totalprice * 0.05m);
                var finalModel = Tuple.Create<IEnumerable<Report>, IEnumerable<Userr>>(res, users);

                return View(finalModel);
            }
            else
            {

                var res = model.Where(x => x.Orderr.DateOrder >= startDate && x.Orderr.DateEnd <= endDate).ToList();
                ViewBag.Quantity = model.Sum(x => x.Orderr.Quantity);
                ViewBag.TotalPrice = model.Sum(x => x.Orderr.Quantity * x.product.Price);
                ViewBag.Profits = model.Sum(x => x.Orderr.Totalprice * 0.05m);
                var finalModel = Tuple.Create<IEnumerable<Report>, IEnumerable<Userr>>(res, users);

                return View(finalModel);
            }
        }
    }
}
