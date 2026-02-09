using FinanceRisk.Infrastructure.Data;
using FinanceRisk.Core.Models;
using Microsoft.EntityFrameworkCore;

public static class RiskReportsEndpoints
{
    public static void MapRiskReportsEndpoints(this WebApplication app)
    {
        var reports = app.MapGroup("/riskreports");

        // POST /riskreports - add a transaction and recalc risk
        reports.MapPost("/", async (Transaction transaction, FinanceRiskDbContext db) =>
        {
            var user = await db.Users
                .Include(u => u.Transactions)
                .FirstOrDefaultAsync(u => u.Id == transaction.UserId);

            if (user == null) 
                return Results.NotFound("User not found");

            // Add  transaction to the user history
            user.Transactions.Add(transaction);
            await db.SaveChangesAsync();

            // Calculate simple risk metrics
            var totalSpent = user.Transactions.Sum(t => t.Amount);
            var burnRate = totalSpent / user.Transactions.Count;

            var savingsRatio = user.Savings == 0 ? 0 : totalSpent / user.Savings;
            var emergencyFundMonths = user.Savings / (burnRate == 0 ? 1 : burnRate);

            var riskLevel = savingsRatio > 1 ? "High" :
                            savingsRatio > 0.5m ? "Medium" :
                            "Low";

            var report = new RiskReport
            {
                UserId = user.Id,
                BurnRate = burnRate,
                SavingsRatio = savingsRatio,
                EmergencyFundMonths = emergencyFundMonths,
                RiskLevel = riskLevel,
                GeneratedAt = DateTime.UtcNow
            };

            db.RiskReports.Add(report);
            await db.SaveChangesAsync();

            return Results.Created($"/riskreports/{report.Id}", report);
        });

        // GET /riskreports/user/{userId} - get all reports for a user
        reports.MapGet("/user/{userId:int}", async (int userId, FinanceRiskDbContext db) =>
        {
            var reportsList = await db.RiskReports
                .Where(r => r.UserId == userId)
                .ToListAsync();

            return reportsList.Any() ? Results.Ok(reportsList) : Results.NotFound();
        });
    }
}