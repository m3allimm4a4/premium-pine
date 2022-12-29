import { Component } from '@angular/core';
import { faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-us-info',
  templateUrl: './contact-us-info.component.html',
  styleUrls: ['./contact-us-info.component.scss'],
})
export class ContactUsInfoComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faLocationArrow = faLocationArrow;
}
