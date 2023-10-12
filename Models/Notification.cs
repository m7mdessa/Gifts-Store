using System;
using System.Collections.Generic;

namespace Gifts_Store.Models;

public partial class Notification
{
    public decimal Id { get; set; }

    public string? Username { get; set; }

    public decimal? Quantity { get; set; }

    public string? ProductName { get; set; }

    public string? CategoryName { get; set; }

    public decimal? Price { get; set; }

    public DateTime? DateOrder { get; set; }

    public string? Status { get; set; }

    public decimal? UserId { get; set; }

    public string? Email { get; set; }

    public string? Address { get; set; }

    public decimal? OrderId { get; set; }

    public virtual Orderr? Order { get; set; }

    public virtual Userr? User { get; set; }
}
