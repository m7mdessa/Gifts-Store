using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Gifts_Store.Models;

public partial class Userr
{
    public decimal Id { get; set; }


    [Required(ErrorMessage = "Email is required.")]
    [RegularExpression("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$", ErrorMessage = "Invalid Email format.")]
    public string? Email { get; set; }

    [Required(ErrorMessage = "Username is required.")]
    [RegularExpression("^[A-Za-z0-9_]+$", ErrorMessage = "Username must contain alphanumeric characters and underscores only.")]
    public string? Username { get; set; }

    [Required(ErrorMessage = "Password is required.")]
    [RegularExpression("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$", ErrorMessage = "Password must contain at least 8 characters with at least one uppercase letter, one lowercase letter, and one digit.")]
    public string? Passwordd { get; set; }


    [Required(ErrorMessage = "Phone number is required.")]
    [RegularExpression("^\\d{10}$", ErrorMessage = "Invalid Phone number format.")]

    public string? Phone { get; set; }

    public decimal? RoleId { get; set; }

    public string? Status { get; set; }

    public decimal? CategoryId { get; set; }

    [Required(ErrorMessage = "Address is required.")]
    [RegularExpression("^[A-Za-z0-9_]+$", ErrorMessage = "Address must contain alphanumeric characters and underscores only.")]
    public string? Address { get; set; }

    public virtual Category? Category { get; set; }

    public virtual ICollection<Notification> Notifications { get; set; } = new List<Notification>();

    public virtual ICollection<Orderr> Orderrs { get; set; } = new List<Orderr>();

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();

    public virtual Role? Role { get; set; }

    public virtual ICollection<Testimonial> Testimonials { get; set; } = new List<Testimonial>();
}
