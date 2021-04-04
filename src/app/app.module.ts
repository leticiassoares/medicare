import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent, FooterComponent, SideMenuComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-br' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
