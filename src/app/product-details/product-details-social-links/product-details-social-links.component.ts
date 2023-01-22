import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { faFacebook, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ShareLink } from 'src/app/shared/models/share-link.interface';

@Component({
  selector: 'app-product-details-social-links',
  templateUrl: './product-details-social-links.component.html',
  styleUrls: ['./product-details-social-links.component.scss'],
})
export class ProductDetailsSocialLinksComponent {
  public shareLinks: ShareLink[];

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.shareLinks = [
      {
        name: 'Whatsapp',
        url: `https://api.whatsapp.com/send?text=${document.location.href}`,
        icon: faWhatsapp,
      },
      {
        name: 'Telegram',
        url: `https://t.me/share/url?url=${document.location.href}&text=`,
        icon: faTelegram,
      },
      {
        name: 'Facebook',
        url: `https://www.facebook.com/sharer/sharer.php?u=${document.location.href}`,
        icon: faFacebook,
      },
      {
        name: 'Twitter',
        url: `https://twitter.com/intent/tweet?url=${document.location.href}&text=`,
        icon: faTwitter,
      },
      {
        name: 'Mail',
        url: `mailto:?&subject=&body=${document.location.href}`,
        icon: faEnvelope,
      },
    ];
  }
}
