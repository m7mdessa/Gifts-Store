using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Gifts_Store.Models;

public partial class ModelContext : DbContext
{
    public ModelContext()
    {
    }

    public ModelContext(DbContextOptions<ModelContext> options)
        : base(options)
    {
    }

    public virtual DbSet<About> Abouts { get; set; }

    public virtual DbSet<Bank> Banks { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Contact> Contacts { get; set; }

    public virtual DbSet<Home> Homes { get; set; }

    public virtual DbSet<Notification> Notifications { get; set; }

    public virtual DbSet<Orderr> Orderrs { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Testimonial> Testimonials { get; set; }

    public virtual DbSet<Userr> Userrs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseOracle("USER ID=JOR18_USER314;PASSWORD=mohammad1999;DATA SOURCE=94.56.229.181:3488/traindb");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .HasDefaultSchema("JOR18_USER314")
            .UseCollation("USING_NLS_COMP");

        modelBuilder.Entity<About>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("SYS_C00381555");

            entity.ToTable("ABOUT");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("NUMBER")
                .HasColumnName("ID");
            entity.Property(e => e.Background)
                .HasMaxLength(255)
                .HasColumnName("BACKGROUND");
            entity.Property(e => e.Contentt)
                .HasMaxLength(255)
                .HasColumnName("CONTENTT");
            entity.Property(e => e.HomeId)
                .HasColumnType("NUMBER")
                .HasColumnName("HOME_ID");

            entity.HasOne(d => d.Home).WithMany(p => p.Abouts)
                .HasForeignKey(d => d.HomeId)
                .HasConstraintName("SYS_C00381556");
        });

        modelBuilder.Entity<Bank>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("SYS_C00379604");

            entity.ToTable("BANK");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("NUMBER")
                .HasColumnName("ID");
            entity.Property(e => e.Amount)
                .HasColumnType("NUMBER(10,2)")
                .HasColumnName("AMOUNT");
            entity.Property(e => e.CardNumber)
                .HasMaxLength(16)
                .IsUnicode(false)
                .HasColumnName("CARD_NUMBER");
            entity.Property(e => e.Cardholdername)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("CARDHOLDERNAME");
            entity.Property(e => e.Cvv)
                .HasMaxLength(3)
                .IsUnicode(false)
                .HasColumnName("CVV");
            entity.Property(e => e.ExpirationDate)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("EXPIRATION_DATE");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("SYS_C00377985");

            entity.ToTable("CATEGORY");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("NUMBER")
                .HasColumnName("ID");
            entity.Property(e => e.CategoryName)
                .HasMaxLength(255)
                .HasColumnName("CATEGORY_NAME");
            entity.Property(e => e.Imagepath)
                .HasMaxLength(255)
                .HasColumnName("IMAGEPATH");
        });

        modelBuilder.Entity<Contact>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("SYS_C00381558");

            entity.ToTable("CONTACT");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("NUMBER")
                .HasColumnName("ID");
            entity.Property(e => e.DateCreated)
                .HasColumnType("DATE")
                .HasColumnName("DATE_CREATED");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("EMAIL");
            entity.Property(e => e.HomeId)
                .HasColumnType("NUMBER")
                .HasColumnName("HOME_ID");
            entity.Property(e => e.Message)
                .HasMaxLength(255)
                .HasColumnName("MESSAGE");
            entity.Property(e => e.Namee)
                .HasMaxLength(255)
                .HasColumnName("NAMEE");
            entity.Property(e => e.Phone)
                .HasMaxLength(255)
                .HasColumnName("PHONE");
            entity.Property(e => e.Subject)
                .HasMaxLength(255)
                .HasColumnName("SUBJECT");

            entity.HasOne(d => d.Home).WithMany(p => p.Contacts)
                .HasForeignKey(d => d.HomeId)
                .HasConstraintName("SYS_C00381559");
        });

        modelBuilder.Entity<Home>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("SYS_C00381553");

            entity.ToTable("HOME");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("NUMBER")
                .HasColumnName("ID");
            entity.Property(e => e.Contentt)
                .HasMaxLength(255)
                .HasColumnName("CONTENTT");
            entity.Property(e => e.Logo)
                .HasMaxLength(255)
                .HasColumnName("LOGO");
            entity.Property(e => e.Slide1)
                .HasMaxLength(255)
                .HasColumnName("SLIDE1");
            entity.Property(e => e.Slide2)
                .HasMaxLength(255)
                .HasColumnName("SLIDE2");
            entity.Property(e => e.Slide3)
                .HasMaxLength(255)
                .HasColumnName("SLIDE3");
        });

        modelBuilder.Entity<Notification>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("SYS_C00379373");

            entity.ToTable("NOTIFICATIONS");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("NUMBER")
                .HasColumnName("ID");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("ADDRESS");
            entity.Property(e => e.CategoryName)
                .HasMaxLength(255)
                .HasColumnName("CATEGORY_NAME");
            entity.Property(e => e.DateOrder)
                .HasColumnType("DATE")
                .HasColumnName("DATE_ORDER");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("EMAIL");
            entity.Property(e => e.OrderId)
                .HasColumnType("NUMBER")
                .HasColumnName("ORDER_ID");
            entity.Property(e => e.Price)
                .HasColumnType("FLOAT")
                .HasColumnName("PRICE");
            entity.Property(e => e.ProductName)
                .HasMaxLength(255)
                .HasColumnName("PRODUCT_NAME");
            entity.Property(e => e.Quantity)
                .HasColumnType("NUMBER")
                .HasColumnName("QUANTITY");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .HasColumnName("STATUS");
            entity.Property(e => e.UserId)
                .HasColumnType("NUMBER")
                .HasColumnName("USER_ID");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("USERNAME");

            entity.HasOne(d => d.Order).WithMany(p => p.Notifications)
                .HasForeignKey(d => d.OrderId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("NOTIFICATIONS_FK1");

            entity.HasOne(d => d.User).WithMany(p => p.Notifications)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("SYS_C00379374");
        });

        modelBuilder.Entity<Orderr>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("SYS_C00377994");

            entity.ToTable("ORDERR");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("NUMBER")
                .HasColumnName("ID");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("ADDRESS");
            entity.Property(e => e.CategoryName)
                .HasMaxLength(255)
                .HasColumnName("CATEGORY_NAME");
            entity.Property(e => e.DateEnd)
                .HasColumnType("DATE")
                .HasColumnName("DATE_END");
            entity.Property(e => e.DateOrder)
                .HasColumnType("DATE")
                .HasColumnName("DATE_ORDER");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("EMAIL");
            entity.Property(e => e.Price)
                .HasColumnType("FLOAT")
                .HasColumnName("PRICE");
            entity.Property(e => e.ProductId)
                .HasColumnType("NUMBER")
                .HasColumnName("PRODUCT_ID");
            entity.Property(e => e.ProductName)
                .HasMaxLength(255)
                .HasColumnName("PRODUCT_NAME");
            entity.Property(e => e.Quantity)
                .HasColumnType("NUMBER")
                .HasColumnName("QUANTITY");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .HasColumnName("STATUS");
            entity.Property(e => e.Totalprice)
                .HasColumnType("FLOAT")
                .HasColumnName("TOTALPRICE");
            entity.Property(e => e.UserId)
                .HasColumnType("NUMBER")
                .HasColumnName("USER_ID");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("USERNAME");

            entity.HasOne(d => d.Product).WithMany(p => p.Orderrs)
                .HasForeignKey(d => d.ProductId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("SYS_C00377996");

            entity.HasOne(d => d.User).WithMany(p => p.Orderrs)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("SYS_C00377995");
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("SYS_C00377998");

            entity.ToTable("PAYMENT");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("NUMBER")
                .HasColumnName("ID");
            entity.Property(e => e.CardNumber)
                .HasMaxLength(16)
                .IsUnicode(false)
                .HasColumnName("CARD_NUMBER");
            entity.Property(e => e.PaymentAmount)
                .HasColumnType("NUMBER(10,2)")
                .HasColumnName("PAYMENT_AMOUNT");
            entity.Property(e => e.PaymentDate)
                .HasColumnType("DATE")
                .HasColumnName("PAYMENT_DATE");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("STATUS");
            entity.Property(e => e.UserId)
                .HasColumnType("NUMBER")
                .HasColumnName("USER_ID");

            entity.HasOne(d => d.User).WithMany(p => p.Payments)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("SYS_C00377999");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("SYS_C00377991");

            entity.ToTable("PRODUCT");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("NUMBER")
                .HasColumnName("ID");
            entity.Property(e => e.CategoryId)
                .HasColumnType("NUMBER")
                .HasColumnName("CATEGORY_ID");
            entity.Property(e => e.Descc)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("DESCC");
            entity.Property(e => e.Imagepath)
                .HasMaxLength(255)
                .HasColumnName("IMAGEPATH");
            entity.Property(e => e.Namee)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("NAMEE");
            entity.Property(e => e.Price)
                .HasColumnType("FLOAT")
                .HasColumnName("PRICE");
            entity.Property(e => e.Quantity)
                .HasColumnType("NUMBER")
                .HasColumnName("QUANTITY");
            entity.Property(e => e.Sale)
                .HasColumnType("NUMBER")
                .HasColumnName("SALE");
            entity.Property(e => e.UserId)
                .HasColumnType("NUMBER")
                .HasColumnName("USER_ID");

            entity.HasOne(d => d.Category).WithMany(p => p.Products)
                .HasForeignKey(d => d.CategoryId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("SYS_C00377992");

            entity.HasOne(d => d.User).WithMany(p => p.Products)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("PRODUCT_FK1");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("SYS_C00377983");

            entity.ToTable("ROLE");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("NUMBER")
                .HasColumnName("ID");
            entity.Property(e => e.Rolename)
                .HasMaxLength(255)
                .HasColumnName("ROLENAME");
        });

        modelBuilder.Entity<Testimonial>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("SYS_C00378004");

            entity.ToTable("TESTIMONIAL");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("NUMBER")
                .HasColumnName("ID");
            entity.Property(e => e.Content)
                .HasMaxLength(255)
                .HasColumnName("CONTENT");
            entity.Property(e => e.DateTestimonial)
                .HasColumnType("DATE")
                .HasColumnName("DATE_TESTIMONIAL");
            entity.Property(e => e.Namee)
                .HasMaxLength(255)
                .HasColumnName("NAMEE");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("STATUS");
            entity.Property(e => e.UserId)
                .HasColumnType("NUMBER")
                .HasColumnName("USER_ID");

            entity.HasOne(d => d.User).WithMany(p => p.Testimonials)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("SYS_C00378005");
        });

        modelBuilder.Entity<Userr>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("SYS_C00377987");

            entity.ToTable("USERR");

            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnType("NUMBER")
                .HasColumnName("ID");
            entity.Property(e => e.Address)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("ADDRESS");
            entity.Property(e => e.CategoryId)
                .HasColumnType("NUMBER")
                .HasColumnName("CATEGORY_ID");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .HasColumnName("EMAIL");
            entity.Property(e => e.Passwordd)
                .HasMaxLength(255)
                .HasColumnName("PASSWORDD");
            entity.Property(e => e.Phone)
                .HasMaxLength(255)
                .HasColumnName("PHONE");
            entity.Property(e => e.RoleId)
                .HasColumnType("NUMBER")
                .HasColumnName("ROLE_ID");
            entity.Property(e => e.Status)
                .HasMaxLength(255)
                .HasColumnName("STATUS");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("USERNAME");

            entity.HasOne(d => d.Category).WithMany(p => p.Userrs)
                .HasForeignKey(d => d.CategoryId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("SYS_C00377988");

            entity.HasOne(d => d.Role).WithMany(p => p.Userrs)
                .HasForeignKey(d => d.RoleId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("SYS_C00377989");
        });
        modelBuilder.HasSequence("DEPARTMENT_ID_SEQ");
        modelBuilder.HasSequence("EMPLOYEE_ID_SEQ");

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
