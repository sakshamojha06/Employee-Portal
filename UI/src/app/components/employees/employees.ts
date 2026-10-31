import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { Employee } from '../../models/employee';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-employees',
  styleUrl: './employees.css',
  templateUrl: './employees.html',
})
export class Employees {
  private employeeService = inject(EmployeeService);

  employees: Employee[] = [];

  constructor() {
    this.employees = this.employeeService.getEmployees();
  }

  onDelete(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this employee? ');

    if(confirmDelete) {
      this.employeeService.deleteEmployee(id);
      this.employees = this.employeeService.getEmployees();
    }
  }
}
