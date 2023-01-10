import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  public username = '';
  public password = '';
  public showMessage = false;

  constructor(private router: Router) {}

  onLogin(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/admin-dashboard']);
      return;
    }
    this.showMessage = true;
  }
}
