using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Globalization;

namespace Gifts_Store.Models;

public partial class Bank
{
    public decimal Id { get; set; }

    public string? Cardholdername { get; set; }

    [Required(ErrorMessage = "Expiration Date is required")]
    [RegularExpression(@"^(0[1-9]|1[0-2])\/(\d{2})$", ErrorMessage = "Invalid Expiration Date. The correct format is MM/YY.")]

    public string? ExpirationDate { get; set; }

    [Required(ErrorMessage = "CVV/CVC is required")]
    [RegularExpression(@"^[0-9]{3,4}$", ErrorMessage = "Invalid CVV/CVC")]

    public string? Cvv { get; set; }
    [NotMapped]

    public decimal? Amount { get; set; }

    [Required(ErrorMessage = "Card Number is required")]
    [RegularExpression(@"^\d{16}$", ErrorMessage = "Invalid Card Number")]
    public string? CardNumber { get; set; }

}
