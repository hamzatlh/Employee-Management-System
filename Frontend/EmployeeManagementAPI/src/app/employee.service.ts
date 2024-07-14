import { Employee } from './../models/employee';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {environment} from './environments/environment';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {

    private apiUrl = environment.apiUrl + '/employees';

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<Employee[]>
    {
        return this.http.get<Employee[]>(this.apiUrl);
    }

    createEmployee(employee: Employee): Observable<Employee>
    {
        return this.http.post<Employee>(this.apiUrl, employee);
    }

    updateEmployee(employee: Employee): Observable<Employee>
    {
        return this.http.put<Employee>(`${this.apiUrl}/${employee.id}`, employee);
    }

    deleteEmployee(id: string): Observable<Employee>
    {
        return this.http.delete<Employee>(`${this.apiUrl}/${id}`);
    }

    getEmployeeById(id: string): Observable<Employee>
    {
        return this.http.get<Employee>(`${this.apiUrl}/${id}`);
    }

}