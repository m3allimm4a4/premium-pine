import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { ContactUsInfoComponent } from './contact-us-info/contact-us-info.component';
import { ContactUsComponent } from './contact-us.component';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContactUsComponent, ContactUsFormComponent, ContactUsInfoComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    SharedModule,
  ],
})
export class ContactUsModule {}
