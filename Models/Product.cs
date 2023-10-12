using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gifts_Store.Models;

public partial class Product
{
    public decimal Id { get; set; }

    public string? Namee { get; set; }

    public string? Descc { get; set; }

    public decimal? Sale { get; set; }

    public decimal? Price { get; set; }

    public string? Imagepath { get; set; }
    [NotMapped]
    public virtual IFormFile ImageFile { get; set; }
    public decimal? CategoryId { get; set; }

    public decimal? UserId { get; set; }

    public decimal? Quantity { get; set; }

    public virtual Category? Category { get; set; }

    public virtual ICollection<Orderr> Orderrs { get; set; } = new List<Orderr>();

    public virtual Userr? User { get; set; }
}
