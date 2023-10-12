using Gifts_Store.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Linq;

namespace LearnHubResturnat.Controllers
{
    public class AuthController : Controller
    {
        private readonly ModelContext _context;
		private readonly IEmailService _emailService;

		public AuthController(ModelContext context, IEmailService emailService)
        {
     
            _context = context;
			_emailService = emailService;

		}
		public IActionResult Register()
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;

			var categories = new SelectList(_context.Categories, "Id", "CategoryName");
			ViewData["Categories"] = categories;

			var RoleIds = new List<int> { 1, 2 };
			var roles = _context.Roles.Where(r => RoleIds.Contains((int)r.Id)).ToList();
			ViewData["Roles"] = new SelectList(roles, "Id", "Rolename");
			return View();
        }
      
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register([Bind("Id,Email,Username,Passwordd,Phone,Address,RoleId,Status,CategoryId")] Userr userr)
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;
            bool isEmailExists = _context.Userrs.Any(u => u.Email == userr.Email);
			bool isUsernameExists = _context.Userrs.Any(u => u.Username == userr.Username);
			bool isPhoneNumberExists = _context.Userrs.Any(u => u.Phone == userr.Phone);

			if (isEmailExists || isUsernameExists || isPhoneNumberExists)
			{
				if (isEmailExists)
				{
					ModelState.AddModelError("Email", "Email is already registered.");
				}

				if (isUsernameExists)
				{
					ModelState.AddModelError("Username", "Username is already taken.");
				}

				if (isPhoneNumberExists)
				{
					ModelState.AddModelError("Phone", "Phone number is already registered.");
				}
			}

			var categories = new SelectList(_context.Categories, "Id", "CategoryName");
			ViewData["Categories"] = categories;

			var RoleIds = new List<int> { 1, 2 }; 
			var roles = _context.Roles.Where(r => RoleIds.Contains((int)r.Id)).ToList();
			ViewData["Roles"] = new SelectList(roles, "Id", "Rolename");


			if (ModelState.IsValid)
            {
			
				if (userr.RoleId == 1)
                    {

                        userr.Status = "Rejected";
                   

                    _context.Add(userr);
                    TempData["SuccessMessage"] = "Your request is in waiting list";

                    var admin = _context.Userrs.SingleOrDefault(u => u.RoleId == 3);

                    var emailSubject = "New Maker Notification";
                    var emailBody = $"Dear {admin?.Username},\n\nYou have received a new Maker.\n\n From:\n Name: {userr.Username}\n Examine the dashboard \n Date: {DateTime.Now}\n\n";
                    _emailService?.SendEmailAsync(admin.Email, emailSubject, emailBody);

                }
                else if (userr.RoleId == 2)
					{
						userr.Status = "Accepted";
						userr.CategoryId = null;
						_context.Add(userr);
                    TempData["SuccessMessage"] = "Successful registration";

                }

                _context.Add(userr);

                    await _context.SaveChangesAsync();


                return RedirectToAction(nameof(Login));



            }

            return View(userr);
        }
        public IActionResult Login()
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;
            return View();
        }

        [HttpPost]
        public IActionResult Login([Bind("Username , Passwordd")] Userr userLogin)
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;
            var auth = _context.Userrs.Where(x => x.Username == userLogin.Username && x.Passwordd == userLogin.Passwordd).SingleOrDefault();
                if (auth != null)

                {
                   
                    switch (auth.RoleId)
                    {
                        case 1:

                        if (auth.Status == "Accepted")
                            {
                           

                            HttpContext.Session.SetInt32("MakerId", (int)auth.Id);
                            HttpContext.Session.SetInt32("MakerCategoryId", (int)auth.CategoryId);

                            HttpContext.Session.SetString("MName", auth.Username);
							return RedirectToAction("Index", "Maker");

						}
						else
							{
								TempData["ErroMessage"] = "Your request is in waiting list";

							}
						break;

						case 2:
                        HttpContext.Session.SetInt32("AdminId", (int)auth.Id);
                        HttpContext.Session.SetString("AName", auth.Username);
                        HttpContext.Session.SetInt32("MakerId", (int)auth.Id);

                        HttpContext.Session.SetInt32("SenderId", (int)auth.Id);
                            HttpContext.Session.SetString("SName", auth.Username);
                            return RedirectToAction("Gifts", "Sender");

                        case 3:
                            HttpContext.Session.SetInt32("AdminId", (int)auth.Id);
                            HttpContext.Session.SetString("AName", auth.Username);
                            return RedirectToAction("Index", "Admin");
                    }


				}
            else
            {
				ModelState.AddModelError("Invalid username or password.", "Invalid username or password.");


			}



			return View();
        }
		public IActionResult Fpass()
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;
            return View();
		}
		[HttpPost]
		public async Task<IActionResult> Fpass([Bind("Email")] Userr userLogin)
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;

            var auth = _context.Userrs.Where(x => x.Email == userLogin.Email).SingleOrDefault();

				if (auth != null)
				{
					if (auth.RoleId == 1)
					{
						var callbackUrl = Url.Action("Rpass", "Auth", new { userId = auth.Id }, protocol: HttpContext.Request.Scheme);

                    string buttonHtml = $"<a href=\"{callbackUrl}\">Click here to reset your password</a>";

                    await _emailService.SendEmailAsync(auth.Email, "Reset Password", $"Please reset your password by clicking this link :{buttonHtml}");
						TempData["SuccessMessage"] = "Password reset email sent successfully.";

					}

					else if (auth.RoleId == 2)
					{
						var callbackUrl = Url.Action("Rpass", "Auth", new { userId = auth.Id }, protocol: HttpContext.Request.Scheme);

                    string buttonHtml = $"<a href=\"{callbackUrl}\">Click here to reset your password</a>";

                    await _emailService.SendEmailAsync(auth.Email, "Reset Password", $"Please reset your password by clicking this link :{buttonHtml}");
						TempData["SuccessMessage"] = "Password reset email sent successfully.";

					}
				

			}
			else
			{
				TempData["ErrorMessage"] = "This email not registered yet.";

			}

			return View();
		}

		public IActionResult Rpass(int userId)
        {
            var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;
			ViewBag.Id = userId;

			return View();
		}
		[HttpPost]
		public async Task<IActionResult> Rpass(int userId, string newPass, string rePass)
        {

			var Logo = _context.Homes.SingleOrDefault();
            var Content = _context.Homes.SingleOrDefault();
            ViewBag.Logo = Logo?.Logo;
            ViewBag.Content = Content?.Contentt;
			var userLogin = _context.Userrs.SingleOrDefault(u => u.Id == userId);

			if (userLogin != null)
			{
				ViewBag.Id = userId;

				var user = _context.Userrs.SingleOrDefault(u => u.Id == userId);


				if (newPass == rePass)
                    {
					user.Passwordd = newPass;
                        _context.Update(user);
                        await _context.SaveChangesAsync();
                        TempData["SuccessMessage"] = "Password updated successfully.";
                        return RedirectToAction("Login", "Auth");
                    }
                    else
                    {
                        TempData["ErrorMessage"] = "Passwords do not match. Please try again.";
                        return RedirectToAction("Login", "Auth");
                    }
             
            }
            else
            {
                TempData["ErrorMessage"] = "User not found. Please try again.";
                return RedirectToAction("Login", "Auth");
            }


        }
	



		public IActionResult Logout()
        {
            HttpContext.Session.Clear();

            return RedirectToAction("Index", "Sender");
        }
    }
}

