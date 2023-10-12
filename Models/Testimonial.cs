using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Gifts_Store.Models;

public partial class Testimonial
{
    public decimal Id { get; set; }
    [Required(ErrorMessage = "Testimonial is required.")]
    public string? Content { get; set; }
    [Required(ErrorMessage = "Name is required.")]
    [RegularExpression("^[A-Za-z0-9_]+$", ErrorMessage = "Name must contain alphanumeric characters and underscores only.")]
    public string? Namee { get; set; }

    public decimal? UserId { get; set; }

    public string? Status { get; set; }

    public DateTime? DateTestimonial { get; set; }

    public virtual Userr? User { get; set; }
}
