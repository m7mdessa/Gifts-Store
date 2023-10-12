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
    public class OrderrsController : Controller
    {
        private readonly ModelContext _context;

        public OrderrsController(ModelContext context)
        {
            _context = context;
        }

        // GET: Orderrs
        public async Task<IActionResult> Index()
        {
            ViewBag.AName = HttpContext.Session.GetString("AName");
            ViewBag.ID = HttpContext.Session.GetInt32("AdminId");
            var modelContext = _context.Orderrs.Include(o => o.Product).Include(o => o.User);
            return View(await modelContext.ToListAsync());
        }


    }
}
