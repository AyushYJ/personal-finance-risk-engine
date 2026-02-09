namespace FinanceRisk.Core.Models
{
    public class RiskReport
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; } = null!;

        public decimal BurnRate { get; set; }
        public decimal SavingsRatio { get; set; }
        public decimal EmergencyFundMonths { get; set; }
        public string RiskLevel { get; set; } = string.Empty;

        public DateTime GeneratedAt { get; set; } = DateTime.UtcNow;
    }
}