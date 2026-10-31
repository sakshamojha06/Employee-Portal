import { Injectable, signal } from "@angular/core";

export type UserRole = 'Admin' | 'User';

export interface AuthUser {
    username: string;
    role: UserRole;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUser = signal<AuthUser | null>(this.loadUser());

    private loadUser(): AuthUser | null {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) as AuthUser: null;
    }

    login(username: string, password: string): boolean {
        let user: AuthUser | null = null;

        if(username === 'admin' && password === 'admin123') {
            user = {
                username: 'admin',
                role: 'Admin'
            };
        }
        else if(username === 'user' && password === 'user123') {
            user = {
                username: 'user',
                role: 'User'
            };
        }

        if (!user) {
            return false;
        }

        this.currentUser.set(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
    }

    logout(): void {
        this.currentUser.set(null);
        localStorage.removeItem('currentUser');
    }

    isLoggedIn(): boolean {
        return this.currentUser() !== null;
    }

    getCurrentUser(): AuthUser | null {
        return this.currentUser();
    }

    getUserRole(): UserRole | null {
        return this.currentUser()?.role ?? null;
    }
}