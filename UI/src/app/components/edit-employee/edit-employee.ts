import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee';
import { Employee } from '../../models/employee';
import { NotificationService } from '../../services/notification';
import { ConfirmationService } from '../../services/confirmation';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './edit-employee.html',
  styleUrl: './edit-employee.css'
})
export class EditEmployee {

  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private employeeService = inject(EmployeeService);
  private notificationService = inject(NotificationService);
  private confirmationService = inject(ConfirmationService);

  employeeId = Number(this.route.snapshot.paramMap.get('id'));

  employeeForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    bio: ['', [Validators.required, Validators.minLength(5)]]
  });

  constructor() {
    const employee = this.employeeService.getEmployeeById(this.employeeId);

    if (!employee) {
      this.router.navigate(['/employees']);
      return;
    }

    this.employeeForm.patchValue({
      name: employee.name,
      bio: employee.bio
    });
  }

  onSubmit(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    const updatedEmployee: Employee = {
      id: this.employeeId,
      name: this.employeeForm.value.name!,
      bio: this.employeeForm.value.bio!
    };

    this.employeeService.updateEmployee(updatedEmployee);
    this.employeeForm.markAsPristine();
    this.notificationService.show('Employee updated successfully.', 'success');
    this.router.navigate(['/employees']);
  }

  canDeactivate(): boolean | Promise<boolean> {
    if (this.employeeForm.dirty) {
      return this.confirmationService.ask(
        'You have unsaved changes. Do you really want to leave this page?'
      );
    }

    return true;
  }
}