using FinanceRisk.Infrastructure.Data;
using FinanceRisk.Core.Models;
using Microsoft.EntityFrameworkCore;

public static class UsersEndpoints
{
    public static void MapUsersEndpoints(this WebApplication app)
    {
        var users = app.MapGroup("/users");

        // GET /users - list all users
        users.MapGet("/", async (FinanceRiskDbContext db) =>
            await db.Users.ToListAsync()
        );

        // GET /users/{id} - get a single user
        users.MapGet("/{id:int}", async (int id, FinanceRiskDbContext db) =>
            await db.Users.FindAsync(id) is User user ? Results.Ok(user) : Results.NotFound()
        );

        // POST /users - create a new user
        users.MapPost("/", async (User user, FinanceRiskDbContext db) =>
        {
            db.Users.Add(user);
            await db.SaveChangesAsync();
            return Results.Created($"/users/{user.Id}", user);
        });
    }
}