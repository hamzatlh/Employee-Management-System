import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Employee } from './../../models/employee';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'] // Corrected from styleUrl to styleUrls
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = new Employee();

  errorMessage: string = "";
  editing: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((result)=>
    {
      const id = result.get('id');
      if(id)
      {
        this.editing = true;
        this.employeeService.getEmployeeById(id).subscribe({
          next: (result) => {
            this.employee = result;
          },
          error: (err) => {
            console.error(err);
            this.errorMessage = `Error occurred during fetching data (${err.message})`;
          }
        });

      }
    }
    );
  }


  onSubmit(): void {
  if(this.editing)
    {
        this.employeeService.updateEmployee(this.employee)
        .subscribe({
          next: () => {
            this.router.navigate(['/']);
          },
          error: (err) => {
            console.error(err);
            this.errorMessage = `Error occurred during updating (${err.message})`;
          }
        });
    }
    else
    {
        this.employeeService.createEmployee(this.employee)
        .subscribe({
          next: () => {
            this.router.navigate(['/']);
          },
          error: (err) => {
            console.error(err);
            this.errorMessage = `Error occurred during creating (${err.message})`;
          }
        });
    } 
  }
}
