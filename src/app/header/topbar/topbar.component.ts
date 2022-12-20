import { Component } from '@angular/core';
import { faHeadphones, faLocationPin, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faUser, faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  public faHeadphones = faHeadphones;
  public faEnvelope = faEnvelope;
  public faLocationPin = faLocationPin;
  public faClock = faClock;
  public faUser = faUser;
  public faPowerOff = faPowerOff;
}
