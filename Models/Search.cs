namespace Gifts_Store.Models
{
    public class Search
    {
        public List<Category> Category { get; internal set; }
        public List<Product> Product { get; internal set; }
        public Product product { get; set; }
        public Category category { get; set; }
    }
}
