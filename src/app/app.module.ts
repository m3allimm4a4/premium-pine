import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderInnerComponent } from './shared/components/header/header-inner/header-inner.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderShoppingListComponent } from './shared/components/header/middle-inner/header-shopping-list/header-shopping-list.component';
import { MiddleInnerComponent } from './shared/components/header/middle-inner/middle-inner.component';
import { TopbarComponent } from './shared/components/header/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HeaderComponent,
    HeaderInnerComponent,
    HeaderShoppingListComponent,
    MiddleInnerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbCollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
