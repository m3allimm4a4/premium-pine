import { Component } from '@angular/core';
import { faHeadphones, faLocationPin, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faUser, faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  faHeadphones = faHeadphones;
  faEnvelope = faEnvelope;
  faLocationPin = faLocationPin;
  faClock = faClock;
  faUser = faUser;
  faPowerOff = faPowerOff;
}
