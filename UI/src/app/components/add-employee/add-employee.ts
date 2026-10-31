import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee';
import { Router, RouterLink } from '@angular/router';
import { Employee } from '../../models/employee';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-add-employee',
  styleUrl: './add-employee.css',
  templateUrl: './add-employee.html',
})
export class AddEmployee {
  private fb = inject(FormBuilder);
  private employeeService = inject(EmployeeService);
  private router = inject(Router);

  employeeForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    bio: ['', [Validators.required, Validators.minLength(5)]]
  });

  onSubmit(): void {
    if(this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    const newEmployee: Employee = {
      id: Date.now(),
      name: this.employeeForm.value.name!,
      bio: this.employeeForm.value.bio!
    };

    this.employeeService.addEmployee(newEmployee);
    this.router.navigate(['/employees']);
  }

  canDeactivate(): boolean {
  if (this.employeeForm.dirty) {
    return confirm('You have unsaved changes. Are you sure you want to leave?');
  }

  return true;
}
}
