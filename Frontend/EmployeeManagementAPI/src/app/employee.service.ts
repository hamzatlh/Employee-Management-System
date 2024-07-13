import { Employee } from './../models/employee';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {environment} from './environments/environment';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {

    private apiUrl = `${environment.apiUrl}/employee`;

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<Employee[]>
    {
        return this.http.get<Employee[]>(this.apiUrl);
    }
}