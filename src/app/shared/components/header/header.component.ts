import { Component, Input } from '@angular/core';
import { faCartShopping, faTrash, faUserCircle } from '@fortawesome/free-solid-svg-icons';

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
