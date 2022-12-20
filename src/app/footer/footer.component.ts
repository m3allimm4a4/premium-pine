import { Component } from '@angular/core';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public faFacebook = faFacebookF;
  public faTwitter = faTwitter;
  public faInstagram = faInstagram;
}
