using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gifts_Store.Models;

public partial class About
{
    public decimal Id { get; set; }

    public string? Contentt { get; set; }

    public string? Background { get; set; }
    [NotMapped]
    public virtual IFormFile ImageFile { get; set; }
    public decimal? HomeId { get; set; }

    public virtual Home? Home { get; set; }
}
