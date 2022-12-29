import { Component } from '@angular/core';
import { faFacebook, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-details-social-links',
  templateUrl: './product-details-social-links.component.html',
  styleUrls: ['./product-details-social-links.component.scss'],
})
export class ProductDetailsSocialLinksComponent {
  public shareLinks = [
    {
      name: 'Whatsapp',
      url: `https://api.whatsapp.com/send?text=${window.location.href}`,
      icon: faWhatsapp,
    },
    {
      name: 'Telegram',
      url: `https://t.me/share/url?url=${window.location.href}&text=`,
      icon: faTelegram,
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
      icon: faFacebook,
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${window.location.href}&text=`,
      icon: faTwitter,
    },
    {
      name: 'Mail',
      url: `mailto:?&subject=&body=${window.location.href}`,
      icon: faEnvelope,
    },
  ];
}
