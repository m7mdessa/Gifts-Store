using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Gifts_Store.Models;

public partial class Contact
{
    public decimal Id { get; set; }

    [Required(ErrorMessage = "Name is required.")]
    [RegularExpression("^[A-Za-z0-9_]+$", ErrorMessage = "Name must contain alphanumeric characters and underscores only.")]
    public string? Namee { get; set; }

    [Required(ErrorMessage = "Email is required.")]
    [RegularExpression("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$", ErrorMessage = "Invalid Email format.")]
    public string? Email { get; set; }

    [Required(ErrorMessage = "Phone number is required.")]
    [RegularExpression("^\\d{10}$", ErrorMessage = "Invalid Phone number format.")]
    public string? Phone { get; set; }
    [Required(ErrorMessage = "Subject is required.")]
    [RegularExpression("^[A-Za-z0-9_]+$", ErrorMessage = "Subject must contain alphanumeric characters and underscores only.")]
    public string? Subject { get; set; }
    [Required(ErrorMessage = "Message is required.")]
    [RegularExpression("^[A-Za-z0-9_]+$", ErrorMessage = "Message must contain alphanumeric characters and underscores only.")]
    public string? Message { get; set; }

    public DateTime? DateCreated { get; set; }

    public decimal? HomeId { get; set; }

    public virtual Home? Home { get; set; }
}
