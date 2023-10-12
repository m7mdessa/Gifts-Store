using System;
using System.Collections.Generic;

namespace Gifts_Store.Models;

public partial class Role
{
    public decimal Id { get; set; }

    public string? Rolename { get; set; }

    public virtual ICollection<Userr> Userrs { get; set; } = new List<Userr>();
}
