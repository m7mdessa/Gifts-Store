using System;
using System.Collections.Generic;

namespace Gifts_Store.Models;

public partial class Payment
{
    public decimal Id { get; set; }

    public string? CardNumber { get; set; }

    public string? Status { get; set; }

    public decimal? PaymentAmount { get; set; }

    public DateTime? PaymentDate { get; set; }

    public decimal? UserId { get; set; }

    public virtual Userr? User { get; set; }
}
