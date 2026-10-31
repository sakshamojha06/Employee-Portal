import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Employees } from './components/employees/employees';
import { AddEmployee } from './components/add-employee/add-employee';
import { EditEmployee } from './components/edit-employee/edit-employee';
import { AccessDenied } from './components/access-denied/access-denied';
import { NotFound } from './components/not-found/not-found';
import { authGuard } from './guards/auth-guard';
import { roleGuard } from './guards/role-guard';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [authGuard]
    },
    {
        path: 'employees',
        component: Employees,
        canActivate: [authGuard, roleGuard],
        data: { role: 'Admin' }
    },
    {
        path: 'employees/add',
        component: AddEmployee,
        canActivate: [authGuard, roleGuard],
        data: { role: 'Admin' }
    },
    {
        path: 'employees/edit/:id',
        component: EditEmployee,
        canActivate: [authGuard, roleGuard],
        data: { role: 'Admin' }
    },
    {
        path: 'access-denied',
        component: AccessDenied
    },
    {
        path: '**',
        component: NotFound
    }
];
