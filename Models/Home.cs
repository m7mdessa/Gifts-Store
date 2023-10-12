using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gifts_Store.Models;

public partial class Home
{
    public decimal Id { get; set; }

    public string? Contentt { get; set; }

    public string? Slide1 { get; set; }

    public string? Slide2 { get; set; }

    public string? Slide3 { get; set; }

    public string? Logo { get; set; }
    [NotMapped]
    public virtual IFormFile ImageLogo { get; set; }
    [NotMapped]
    public virtual IFormFile ImageSlide1 { get; set; }
    [NotMapped]
    public virtual IFormFile ImageSlide2 { get; set; }
    [NotMapped]
    public virtual IFormFile ImageSlide3 { get; set; }
    public virtual ICollection<About> Abouts { get; set; } = new List<About>();

    public virtual ICollection<Contact> Contacts { get; set; } = new List<Contact>();
}
