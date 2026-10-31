import { Injectable } from "@angular/core";
import { Employee } from "../models/employee";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private employees: Employee[] = [
        {
            id: 1,
            name: 'Rahul Sharma',
            bio: 'Frontend Developer'
        },
        {
            id: 2,
            name: 'Priya Verma',
            bio: 'Backend Developer'
        },
        {
            id: 3,
            name: 'Amit Kumar',
            bio: 'Full Stack Developer'
        }
    ];

    getEmployees(): Employee[] {
        return this.employees;
    }

    getEmployeeById(id: number): Employee | undefined {
        return this.employees.find(emp => emp.id === id);
    }

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    } 

    updateEmployee(updatedEmployee: Employee): void {
        const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);

        if(index !== -1) {
            this.employees[index] = updatedEmployee;
        }
    }

    deleteEmployee(id: number): void {
        this.employees = this.employees.filter(emp => emp.id !== id);
    }
}