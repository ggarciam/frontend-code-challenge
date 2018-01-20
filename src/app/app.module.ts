import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { ExposesComponent } from './exposes/exposes.component';
import { Globals } from './shared/services/globals.service';
import { AdvertisementsService } from './shared/services/advertisements.service';
import { AngularMaterialModule } from './app.material-module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    ExposesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  providers: [
    Globals,
    AdvertisementsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
