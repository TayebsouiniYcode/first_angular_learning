import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';
import {CollectableService} from "./shared/collectable.service";

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CollectableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
