import { Injectable } from "@angular/core";

export type UserRole = 'Admin' | 'User';

export interface AuthUser {
    username: string;
    role: UserRole;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUser: AuthUser | null = this.loadUser();

    private loadUser(): AuthUser | null {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) as AuthUser: null;
    }

    login(username: string, password: string): boolean {

        if(username === 'admin' && password === 'admin123') {
            this.currentUser = {
                username: 'admin',
                role: 'Admin'
            };

            localStorage.setItem(
                'currentUser',
                JSON.stringify(this.currentUser)
            );

        return true;
        }

        if(username === 'user' && password === 'user123') {
            this.currentUser = {
                username: 'user',
                role: 'User'
            };

            localStorage.setItem(
                'currentUser',
                JSON.stringify(this.currentUser)
            );

            return true;
        }

        return false;
    }

    logout(): void {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    isLoggedIn(): boolean {
        return this.currentUser != null;
    }

    getCurrentUser(): AuthUser | null {
        return this.currentUser;
    }

    getUserRole(): UserRole | null {
        return this.currentUser?.role ?? null;
    }
}