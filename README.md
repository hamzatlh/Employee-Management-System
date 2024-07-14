# Employee Management System

## Overview
The Employee Management System is a web application designed to manage employee data with Create, Read, Update, and Delete (CRUD) operations. The backend is developed using .NET 8 and Entity Framework Core with a SQLite database. The frontend is built using Angular.

## Features
- **Backend**: .NET 8 Web API
  - CRUD operations for employee management
  - Entity Framework Core integration with SQLite
- **Frontend**: Angular
  - Employee listing, viewing, adding, and editing
  - Angular routing for navigation
  - Service to communicate with the API

## Technologies Used
- .NET 8
- Entity Framework Core
- SQLite
- Angular
- TypeScript
- HTML/CSS

## Getting Started

### Backend Setup

1. **Clone the repository**:
   ```bash
   git clone git@github.com:hamzatlh/Employee-Management-System.git
   cd employee-management-system/EmployeeManagementAPI
2. **Add Entity Framework tools**:
   ```bash
   dotnet tool install --global dotnet-ef
3. **Create the initial migration**:
   ```bash
    dotnet ef migrations add InitialCreate
4. **Create the initial migration**:
   ```bash
    dotnet ef migrations add InitialCreate
5. **Update the database:**:
   ```bash
    dotnet ef database update
6. **Run the API**:
   ```bash
    dotnet run

### Frontend Setup

1. **Navigate to the Angular project**:
   ```bash
   cd ../EmployeeManagementUI
2. **Install Angular dependencie**:
   ```bash
   npm install
3. **Run the Angular application:**:
   ```bash
    ng serve
4. **Access the application:**:
   ```bash
    Open your browser and go to http://localhost:4200
