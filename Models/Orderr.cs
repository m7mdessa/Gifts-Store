using System;
using System.Collections.Generic;

namespace Gifts_Store.Models;

public partial class Orderr
{
    public decimal Id { get; set; }

    public decimal? ProductId { get; set; }

    public string? Username { get; set; }

    public decimal? Quantity { get; set; }

    public string? ProductName { get; set; }

    public string? CategoryName { get; set; }

    public decimal? Price { get; set; }

    public DateTime? DateOrder { get; set; }

    public string? Status { get; set; }

    public decimal? UserId { get; set; }

    public string? Address { get; set; }

    public string? Email { get; set; }

    public decimal? Totalprice { get; set; }

    public DateTime? DateEnd { get; set; }

    public virtual ICollection<Notification> Notifications { get; set; } = new List<Notification>();

    public virtual Product? Product { get; set; }

    public virtual Userr? User { get; set; }
}
