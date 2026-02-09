namespace FinanceRisk.Core.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;

        public ICollection<RiskReport> RiskReports { get; set; } = new List<RiskReport>();
        public ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();
    }
}