using Gifts_Store.Models;
using iTextSharp.text.pdf;
using iTextSharp.text;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol.Plugins;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Http;
using System.Text.Json;

namespace Gifts_Store.Controllers
{
    public class SenderController : Controller
    {
		private readonly ModelContext _context;
		private readonly IWebHostEnvironment _webHostEnviroment;
		private readonly IEmailService _emailService;

		public SenderController(ModelContext context, IWebHostEnvironment webHostEnviroment, IEmailService emailService)
		{
			_context = context;
			_webHostEnviroment = webHostEnviroment;
			_emailService = emailService;

		}

		public IActionResult Index()
        {
            ViewBag.SName = HttpContext.Session.GetString("SName");
            ViewBag.ID = HttpContext.Session.GetInt32("SenderId");
            ViewBag.AName = HttpContext.Session.GetString("AName");
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;

            var Testimonials = _context.Testimonials.ToList();
            var Categories = _context.Categories.ToList();

            var Products = _context.Products.ToList();
            var Homes = _context.Homes.SingleOrDefault();

            var model = Tuple.Create<IEnumerable<Testimonial>, IEnumerable<Category>, IEnumerable<Product>,Home> (Testimonials, Categories, Products, Homes);

            return View(model);

        }
        public IActionResult Gifts()
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;
            ViewBag.SName = HttpContext.Session.GetString("SName");
            ViewBag.ID = HttpContext.Session.GetInt32("SenderId");

            var Categories = _context.Categories.ToList();
            var Products = _context.Products.ToList();

			var model = Tuple.Create< IEnumerable<Category>, IEnumerable<Product> >( Categories, Products);


            return View(model);
            
        }
        public IActionResult giftsPercategory(int id)
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;

            ViewBag.SName = HttpContext.Session.GetString("SName");
            ViewBag.ID = HttpContext.Session.GetInt32("SenderId");

			var Categories = _context.Categories.ToList();

			var Products = _context.Products.Where(m =>  m.CategoryId == id).ToList();

			var model = Tuple.Create<IEnumerable<Category>, IEnumerable<Product>>(Categories, Products);

			return View(model);

        }
        public IActionResult giftDetail(decimal? id)
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;

            ViewBag.SName = HttpContext.Session.GetString("SName");
			ViewBag.ID = HttpContext.Session.GetInt32("SenderId");

            var gift =  _context.Products
                .Include(g => g.Category)
                .SingleOrDefault(m => m.Id == id);

            return View(gift);

		}
		public IActionResult Testimonial()
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;
            ViewBag.SName = HttpContext.Session.GetString("SName");
            ViewBag.ID = HttpContext.Session.GetInt32("SenderId");
			return View();

        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Testimonial([Bind("Id,Namee,Content,Status,DateTestimonial,UserId")] Testimonial testimonial)
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;
			ViewBag.SName = HttpContext.Session.GetString("SName");
			ViewBag.ID = HttpContext.Session.GetInt32("SenderId");

			if (ModelState.IsValid)
            {
                
				
					
					testimonial.Status = "pending";
                testimonial.DateTestimonial = DateTime.Now;

                _context.Add(testimonial);
                TempData["SuccessMessage"] = "Your testimonial sent.";

                await _context.SaveChangesAsync();


                var admin = _context.Userrs.SingleOrDefault(u => u.RoleId == 3);

                var emailSubject = "New Testimonial Notification";
                var emailBody = $"Dear {admin?.Username},\n\nYou have received a new Testimonial.\n\n From:\n Name: {testimonial.Namee}\nDate: {DateTime.Now}\n\n";
                _emailService?.SendEmailAsync(admin.Email, emailSubject, emailBody);



                return RedirectToAction(nameof(Testimonial));




			}

			return View(testimonial);
        }



		public IActionResult yourTestimonial()
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;
            ViewBag.SName = HttpContext.Session.GetString("SName");
			ViewBag.ID = HttpContext.Session.GetInt32("SenderId");

			var id = HttpContext.Session.GetInt32("SenderId");

			if (id != null)
			{
				var testimonials = _context.Testimonials.Where(o => o.UserId == id).ToList();
				return View(testimonials);
			}
			else
			{
				return View(new List<Testimonial>());
			}

		}
		public IActionResult Contact()
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;
            ViewBag.SName = HttpContext.Session.GetString("SName");
            ViewBag.ID = HttpContext.Session.GetInt32("SenderId");
         
            return View();

        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Contact([Bind("Id,Namee,Email,Phone,Subject,Message,DateCreated,HomeId")] Contact userr)
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;

            if (ModelState.IsValid)
            {
                ViewBag.SName = HttpContext.Session.GetString("SName");
                ViewBag.ID = HttpContext.Session.GetInt32("SenderId");
                userr.DateCreated = DateTime.Now;
                _context.Add(userr);


                TempData["SuccessMessage"] = "Your message sent.";

                await _context.SaveChangesAsync();

                var admin = _context.Userrs.SingleOrDefault(u => u.RoleId == 3);

                var emailSubject = "New Contact Notification";
                var emailBody = $"Dear {admin?.Username},\n\nYou have received a new Contact.\n\n From:\n Name: {userr.Namee}\nDate: {DateTime.Now}\n\n";
                _emailService?.SendEmailAsync(admin.Email, emailSubject, emailBody);


                return RedirectToAction(nameof(Contact));



            }

            return View(userr);
        }
        public IActionResult About()
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;

            ViewBag.SName = HttpContext.Session.GetString("SName");
            ViewBag.ID = HttpContext.Session.GetInt32("SenderId");
            var about = _context.Abouts.SingleOrDefault();


            return View(about);

        }
		public IActionResult Pay(decimal? notificationId)
		{
			var Logo = _context.Homes.SingleOrDefault();
			var Content = _context.Homes.SingleOrDefault();
			ViewBag.Logo = Logo?.Logo;
			ViewBag.Content = Content?.Contentt;

			ViewBag.SName = HttpContext.Session.GetString("SName");
			ViewBag.ID = HttpContext.Session.GetInt32("SenderId");
			ViewBag.NotificationId = notificationId;


			return View();

		}
		[HttpPost]
		[ValidateAntiForgeryToken]

		public async Task<IActionResult> Pay([Bind("Id,CardNumber,ExpirationDate,Cardholdername,Cvv")] Bank bankcard, int notificationId)
		{
			var Logo = _context.Homes.SingleOrDefault();
			var Content = _context.Homes.SingleOrDefault();
			ViewBag.Logo = Logo?.Logo;
			ViewBag.Content = Content?.Contentt;

			ViewBag.SName = HttpContext.Session.GetString("SName");
			ViewBag.ID = HttpContext.Session.GetInt32("SenderId");

			var card = _context.Banks.SingleOrDefault(b => b.Cardholdername.Equals(bankcard.Cardholdername) &&
	            b.CardNumber.Equals(bankcard.CardNumber) &&
				b.ExpirationDate.Equals(bankcard.ExpirationDate) &&
				b.Cvv.Equals(bankcard.Cvv));

            if (card != null)
            {
                ViewBag.NotificationId = notificationId;

                var userId = HttpContext.Session.GetInt32("SenderId");
                var user = _context.Userrs.SingleOrDefault(u => u.Id == userId);
                var notification = _context.Notifications.SingleOrDefault(n => n.Id == notificationId);
                var order = _context.Orderrs.Where(o => o.Id == notification.OrderId).SingleOrDefault();
                if (order != null)
                {

                    if (card.Amount >= order?.Totalprice)
                    {
                        card.Amount -= order.Totalprice;
                        order.Status = "Arrived";
                        _context.Update(order);
                        await _context.SaveChangesAsync();

						notification.Status = "Paid";
						_context.Update(notification);
						await _context.SaveChangesAsync();

						var payment = new Payment
                        {
                            UserId = order?.UserId,
                            PaymentAmount = order?.Totalprice,
                            Status = "Succeed",
                            PaymentDate = DateTime.Now,
                            CardNumber = bankcard.CardNumber
                        };
                        _context.Add(payment);
                        await _context.SaveChangesAsync();
                    
                        byte[] invoicePdfBytes = GenerateInvoicePdf(order);
						var emailSubject = "Request Arrival";
						var attachmentName = "invoice.pdf";
						var attachmentData = invoicePdfBytes;

						var emailBody = $@"
<html>
<head>
      <style>
        body {{
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            padding: 20px;
        }}
        .container {{
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }}
        .header {{
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin-bottom: 20px;
            text-align: center;
        }}
        .details {{
            font-size: 16px;
            color: #666;
            line-height: 1.5;
        }}
        .button {{
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: #fff;
            text-decoration: none;
            border-radius: 4px;
            margin-top: 20px;
        }}
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>Request Arrival</div>
        <div class='details'>
            <p>Your request has arrived.</p>
            <p>Please find the attached invoice below:</p>
        </div>
    </div>
</body>
</html>";

						await _emailService.SendEmailWithAttachmentAsync(notification.Email, emailSubject, emailBody, attachmentData, attachmentName);

						TempData["PaymentResult"] = "Payment succeeded!";
                        TempData["PaymentResultType"] = "success";
                    }
                    else
                    {
                        if (order != null)
                        {

                            order.Status = "Not Arrived";
                            _context.Update(order);
                            await _context.SaveChangesAsync();

                            await _emailService.SendEmailAsync(notification.Email, "Payment failed", "\r\nSorry, your amount is not enough.\r\n");
                            TempData["PaymentResult"] = "Payment failed due to insufficient funds.";
                            TempData["PaymentResultType"] = "danger";
                        }
                    }

                }
				else
				{
					TempData["PaymentResult"] = "Order not found.";
					TempData["PaymentResultType"] = "danger";
				}
			}


            else
            {
                TempData["PaymentResult"] = "Invalid bank card information.";
                TempData["PaymentResultType"] = "danger";
            }

			ModelState.Clear();

			return View(bankcard);
		}
	
		private byte[] GenerateInvoicePdf(Orderr order)
		{
			using (MemoryStream memoryStream = new MemoryStream())
			{
				Document document = new Document();
				PdfWriter writer = PdfWriter.GetInstance(document, memoryStream);

				document.Open();
				document.AddTitle("Invoice");
				document.AddAuthor("Gifts Store");

				Font headerFont = new Font(Font.FontFamily.HELVETICA, 24, Font.BOLD);
				Font cellFont = new Font(Font.FontFamily.HELVETICA, 10, Font.NORMAL, BaseColor.DARK_GRAY);
				Font headerCellFont = new Font(Font.FontFamily.HELVETICA, 12, Font.BOLD, BaseColor.WHITE);

				Paragraph header = new Paragraph("Invoice", headerFont);
				header.Alignment = Element.ALIGN_CENTER;
				document.Add(header);

				//document.Add(CreateStyledParagraph($"Order ID: {order.Id}", cellFont));
				document.Add(CreateStyledParagraph($"Sender Name: {order.Username}", cellFont));
				document.Add(CreateStyledParagraph($"Address: {order.Address}", cellFont));
				document.Add(CreateStyledParagraph($"Email: {order.Email}", cellFont));
				document.Add(CreateStyledParagraph($"Date: {order.DateOrder}", cellFont));

				document.Add(new Paragraph() { SpacingAfter = 20 });

				PdfPTable table = new PdfPTable(6);
				table.WidthPercentage = 100;

				float[] columnWidths = { 3f, 1.5f, 1.5f, 2f, 1.5f, 1.5f };
				table.SetWidths(columnWidths);

				table.AddCell(CreateStyledCell("Product", headerCellFont, BaseColor.DARK_GRAY));
				table.AddCell(CreateStyledCell("Category", headerCellFont, BaseColor.DARK_GRAY));
				table.AddCell(CreateStyledCell("Quantity", headerCellFont, BaseColor.DARK_GRAY));
				table.AddCell(CreateStyledCell("Price", headerCellFont, BaseColor.DARK_GRAY));
				table.AddCell(CreateStyledCell("Total Price", headerCellFont, BaseColor.DARK_GRAY));
				table.AddCell(CreateStyledCell("Status", headerCellFont, BaseColor.DARK_GRAY));

				table.AddCell(CreateStyledCell(order.ProductName, cellFont));
				table.AddCell(CreateStyledCell(order.CategoryName, cellFont));
				table.AddCell(CreateStyledCell(order.Quantity.ToString(), cellFont));
				table.AddCell(CreateStyledCell(order.Price.ToString(), cellFont));
				table.AddCell(CreateStyledCell(order.Totalprice.ToString(), cellFont));
				table.AddCell(CreateStyledCell(order.Status, cellFont));

				document.Add(table);

				document.Close();

				return memoryStream.ToArray();
			}
		}
		private PdfPCell CreateStyledCell(string text, Font font, BaseColor backgroundColor = null)
		{
			PdfPCell cell = new PdfPCell(new Phrase(text, font));

			cell.PaddingTop = 8;
			cell.PaddingBottom = 8;

			if (backgroundColor != null)
			{
				cell.BackgroundColor = backgroundColor;
			}

			return cell;
		}

		private Paragraph CreateStyledParagraph(string text, Font font)
		{
			Paragraph paragraph = new Paragraph(text, font);
			return paragraph;
		}
		public IActionResult Payments()
		{
			ViewBag.SName = HttpContext.Session.GetString("SName");
			ViewBag.ID = HttpContext.Session.GetInt32("SenderId");

			var id = HttpContext.Session.GetInt32("SenderId");
			var Logo = _context.Homes.SingleOrDefault();
			var Content = _context.Homes.SingleOrDefault();
			ViewBag.Logo = Logo?.Logo;
			ViewBag.Content = Content?.Contentt;
			if (id != null)
			{
				var payments = _context.Payments.Where(o => o.UserId == id).ToList();
				return View(payments);
			}
			else
			{
				return View(new List<Payment>());
			}

		}
        public IActionResult Search(string? searchString)
        {
            ViewBag.SName = HttpContext.Session.GetString("SName");
            ViewBag.ID = HttpContext.Session.GetInt32("SenderId");

            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;

            var model = new List<Search>();

            var categories = _context.Categories.Where(s => s.CategoryName.ToLower().Equals(searchString.ToLower())).ToList();
            if (categories == null || categories.Count == 0)
            {
                var gifts = _context.Products.Where(s => s.Namee.ToLower().Equals(searchString.ToLower())).ToList();
                foreach (var gift in gifts)
                {
                    model.Add(new Search { product = gift });
                }
            }
            else
            {
                foreach (var category in categories)
                {
                    model.Add(new Search { category = category });
                }
            }

            return View(model);
        }

		public IActionResult Order()
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;

            ViewBag.SName = HttpContext.Session.GetString("SName");
            ViewBag.ID = HttpContext.Session.GetInt32("SenderId");

            var id = HttpContext.Session.GetInt32("SenderId");

            if (id != null)
            {
                var orders = _context.Orderrs.Where(o => o.UserId == id).ToList();
                return View(orders);
            }
            else
            {
                return View(new List<Orderr>());
            }

        }

[HttpPost]
        public async Task<IActionResult> Order(int ProductId, Orderr order)
        {
            try
            {
                var Logo = _context.Homes.SingleOrDefault();
                var Content = _context.Homes.SingleOrDefault();
                ViewBag.Logo = Logo?.Logo;
                ViewBag.Content = Content?.Contentt;
                ViewBag.SName = HttpContext.Session.GetString("SName");
                ViewBag.ID = HttpContext.Session.GetInt32("SenderId");
                var userId = HttpContext.Session.GetInt32("SenderId");

                var Product = await _context.Products.Include(p => p.Category).SingleOrDefaultAsync(p => p.Id == ProductId);
                var user = _context.Userrs.SingleOrDefault(u => u.Id == userId);

				if (ModelState.IsValid && Product != null && user != null)
				{
				

					order.ProductId = Product.Id;
						order.Totalprice = Product.Price * order.Quantity;
						order.Address = user.Address;
						order.Email = user.Email;
						order.DateOrder = DateTime.Now;
						order.DateEnd = DateTime.Now;
						order.Status = "Pending";
						order.Username = user.Username;
                        order.CategoryName = Product.Category?.CategoryName;
                        order.UserId = user.Id;

                        _context.Add(order);

					var existingProduct = await _context.Products.FindAsync(Product.Id);

					if (existingProduct != null)
					{
						existingProduct.Sale += order.Quantity;
						existingProduct.Quantity -= order.Quantity;

						_context.Products.Update(existingProduct);
						await _context.SaveChangesAsync();
					}


					var makerId = Product?.UserId;

					if (makerId != null)
					{
							var notification = new Notification
							{
                                OrderId = order.Id,
                                Price = order.Quantity * Product?.Price,
								CategoryName = order.CategoryName,
								Quantity = order.Quantity,
								ProductName = Product?.Namee,
								DateOrder = DateTime.Now,
								Status = "Pending",
								Username = order.Username,
								Address = order.Address,
								Email = order.Email,
								UserId = makerId.Value
							};

							_context.Add(notification);
						

					}

					await _context.SaveChangesAsync();


				
					var maker = _context.Userrs.SingleOrDefault(u => u.Id == makerId);

					var emailSubject = "New Order Notification";
					var emailBody = $@"
    <html>
    <head>
        <style>
            /* Define your CSS styles here */
            body {{
                font-family: Arial, sans-serif;
            }}
            .header {{
                font-size: 20px;
                font-weight: bold;
                color: #333;
            }}
            .details {{
                font-size: 16px;
                color: #666;
            }}
        </style>
    </head>
    <body>
        <div class='header'>Dear {maker?.Username},</div>
        <div class='details'>
            <p>You have received a new order from {user.Username}.</p>
            <p>Order Details:</p>
            <ul>
                <li>Product Name: {Product.Namee}</li>
                <li>Date: {DateTime.Now}</li>
            </ul>
        </div>
    </body>
    </html>";

					_emailService?.SendEmailAsync(maker.Email, emailSubject, emailBody);
                    TempData["order"] = "Your request has been submitted. We will contact as soon as possible.";


                }

            }
            catch (Exception)
            {
                if (!OrderrExists(order.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToAction("Order", "Sender"); 
        }




        private bool OrderrExists(object id)
        {
            throw new NotImplementedException();
        }

        public async Task<IActionResult> Edit()
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;

            ViewBag.Pame = HttpContext.Session.GetString("PName");
            ViewBag.SName = HttpContext.Session.GetString("SName");
            ViewBag.ID = HttpContext.Session.GetInt32("SenderId");

            var id = HttpContext.Session.GetInt32("SenderId");

            var userrs = await _context.Userrs.SingleOrDefaultAsync(m => m.Id == id);


            if (userrs == null)
            {
                return NotFound();
            }



            return View(userrs);

        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(decimal id, [Bind("Id,Email,Username,Passwordd,Address,Phone,RoleId,Status,CategoryId")] string newPass, string rPass, Userr userrs)
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;
            ViewBag.SName = HttpContext.Session.GetString("SName");
            ViewBag.ID = HttpContext.Session.GetInt32("SenderId");
            if (id != userrs.Id)
            {
                return NotFound();
            }
            if (ModelState.IsValid)
            {
                try
                {
                        userrs.RoleId = 2;
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
                return RedirectToAction(nameof(Edit));

            }
            return View(userrs);
        }

        private bool UserrExists(decimal id)
		{
			throw new NotImplementedException();
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
		
	}
}