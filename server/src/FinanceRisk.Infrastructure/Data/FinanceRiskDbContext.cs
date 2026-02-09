using Microsoft.EntityFrameworkCore;
using FinanceRisk.Core.Models;

namespace FinanceRisk.Infrastructure.Data
{
    public class FinanceRiskDbContext : DbContext
    {
        public FinanceRiskDbContext(DbContextOptions<FinanceRiskDbContext> options) 
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<RiskReport> RiskReports { get; set; }
        public DbSet<Transaction> Transactions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}