import { Component } from '@angular/core';
import {
  faMagnifyingGlass,
  faBagShopping,
  faUserCircle,
  faRemove,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-middle-inner',
  templateUrl: './middle-inner.component.html',
  styleUrls: ['./middle-inner.component.scss'],
})
export class MiddleInnerComponent {
  public faMagnifyingGlass = faMagnifyingGlass;
  public faBagShopping = faBagShopping;
  public faUserCircle = faUserCircle;
  public faRemove = faRemove;
}
