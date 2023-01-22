import { Component } from '@angular/core';
import {
  faEnvelope,
  faHeadphones,
  faLocationPin,
  faPowerOff,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  faHeadphones = faHeadphones;
  faEnvelope = faEnvelope;
  faLocationPin = faLocationPin;
  faUser = faUser;
  faPowerOff = faPowerOff;
}
