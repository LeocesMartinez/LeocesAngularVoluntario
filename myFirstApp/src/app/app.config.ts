import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { PadreComponent } from './padre/padre.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};