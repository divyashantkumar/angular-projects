import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    // Replace with real admin check
    const isAdmin = this.authService.isLoggedIn()  /* && check admin role */;
    if (!isAdmin) {
      this.router.navigate(['/not-authorized']);
      return false;
    }
    return true;
  }
}
