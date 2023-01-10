import { Component } from '@angular/core';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public area = 'user';

  onActivate(component: Component) {
    if (component instanceof AdminDashboardComponent) {
      this.area = 'admin';
    } else {
      this.area = 'user';
    }
  }
}
