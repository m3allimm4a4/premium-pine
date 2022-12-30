import { Component } from '@angular/core';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeadphones, faLocationPin, faPowerOff } from '@fortawesome/free-solid-svg-icons';

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
