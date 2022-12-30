import { Component } from '@angular/core';
import { ContactUsComponent } from './contact-us/contact-us.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public currentPage = 'home';

  onActivate(component: Component) {
    if (component instanceof ContactUsComponent) {
      this.currentPage = 'contact-us';
    } else {
      this.currentPage = 'home';
    }
  }
}
