using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gifts_Store.Models;

public partial class Category
{
    public decimal Id { get; set; }

    public string? CategoryName { get; set; }

    public string? Imagepath { get; set; }
    [NotMapped]
    public virtual IFormFile ImageFile { get; set; }
    public virtual ICollection<Product> Products { get; set; } = new List<Product>();

    public virtual ICollection<Userr> Userrs { get; set; } = new List<Userr>();
}
