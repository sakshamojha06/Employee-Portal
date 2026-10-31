import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Employees } from './components/employees/employees';
import { AddEmployee } from './components/add-employee/add-employee';
import { EditEmployee } from './components/edit-employee/edit-employee';
import { AccessDenied } from './components/access-denied/access-denied';
import { NotFound } from './components/not-found/not-found';

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
        component: Dashboard
    },
    {
        path: 'employees',
        component: Employees
    },
    {
        path: 'employees/add',
        component: AddEmployee
    },
    {
        path: 'employees/edit/:id',
        component: EditEmployee
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
