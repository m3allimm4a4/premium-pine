import { Component, Input } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faUserCircle = faUserCircle;
  faCartShopping = faCartShopping;
  faTrash = faTrash;
  isMenuCollapsed = true;

  @Input() currentPage = '';
}
