using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EmployeeManagementAPI.Models;

namespace EmployeeManagementAPI.Data
{
    public class EmployeeContext : DbContext
        {
            public EmployeeContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
            {
            }
            public DbSet<Employee> Employees { get; set; }
            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseSqlite("Data Source=employees.db");
            }
        }
}

