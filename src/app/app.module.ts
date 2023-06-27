import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IntroScreenComponent} from './intro-screen/intro-screen.component';
import {MainScreenComponent} from './main-screen/main-screen.component';
import {CollectionScreenComponent} from './main-screen/collection-screen/collection-screen.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MenuCardComponent} from './main-screen/components/menu-card/menu-card.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { MenuScreenComponent } from './main-screen/menu-screen/menu-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroScreenComponent,
    MainScreenComponent,
    MenuCardComponent,
    CollectionScreenComponent,
    MenuScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
