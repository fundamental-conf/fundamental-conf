import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileComponent } from './home-component/mobile/mobile.component';
import { DesktopComponent } from './home-component/desktop/desktop.component';
import { AgendaComponent } from './agenda-component/agenda/agenda.component';
import { HomeComponent } from './home-component/home/home.component';
import { MobileAnimationComponent } from './mobile-animation/mobile-animation.component';
import { DesktopNavbarComponent } from './navbar/desktop-navbar/desktop-navbar.component';
import { MobileNavbarComponent } from './navbar/mobile-navbar/mobile-navbar.component';
import { DesktopAgendaComponent } from './agenda-component/desktop-agenda/desktop-agenda.component';
import { MobileAgendaComponent } from './agenda-component/mobile-agenda/mobile-agenda.component';
import { DesktopFooterComponent } from './footer-component/desktop-footer/desktop-footer.component';
import { MobileFooterComponent } from './footer-component/mobile-footer/mobile-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    DesktopComponent,
    AgendaComponent,
    HomeComponent,
    MobileAnimationComponent,
    DesktopNavbarComponent,
    MobileNavbarComponent,
    DesktopAgendaComponent,
    MobileAgendaComponent,
    DesktopFooterComponent,
    MobileFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
