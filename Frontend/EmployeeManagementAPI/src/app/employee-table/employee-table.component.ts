import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-table',
  standalone: true,
  imports: [],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent {
  employyes : Employee[] = [];
  
  constructor (private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService .getEmployees().subscribe((data: Employee[]) => {
      this.employyes = data;
    });
  }

}