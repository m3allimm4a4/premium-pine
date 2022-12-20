import { Component } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public faUserCircle = faUserCircle;
  public faCartShopping = faCartShopping;
  public faTrash = faTrash;

  public isMenuCollapsed = true;
}
