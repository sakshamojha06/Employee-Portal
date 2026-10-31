import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService, UserRole } from '../services/auth';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const requiredRole = route.data['role'] as UserRole;

  const userRole = authService.getUserRole();

  if(userRole === requiredRole) {
    return true;
  }
    
  return router.createUrlTree(['/access-denied']);
};
