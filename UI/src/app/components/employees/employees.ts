import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee';
import { Employee } from '../../models/employee';
import { RouterLink } from '@angular/router';
import { NotificationService } from '../../services/notification';

@Component({
  imports: [RouterLink],
  selector: 'app-employees',
  styleUrl: './employees.css',
  templateUrl: './employees.html',
})
export class Employees {
  private employeeService = inject(EmployeeService);
  private notificationService = inject(NotificationService);

  employees: Employee[] = [];
  pendingDeleteEmployee: Employee | null = null;

  constructor() {
    this.employees = this.employeeService.getEmployees();
  }

  requestDelete(employee: Employee): void {
    this.pendingDeleteEmployee = employee;
  }

  cancelDelete(): void {
    this.pendingDeleteEmployee = null;
  }

  confirmDelete(): void {
    if (!this.pendingDeleteEmployee) {
      return;
    }

    this.employeeService.deleteEmployee(this.pendingDeleteEmployee.id);
    this.employees = this.employeeService.getEmployees();
    this.pendingDeleteEmployee = null;
    this.notificationService.show('Employee deleted successfully.', 'success');
  }
}
