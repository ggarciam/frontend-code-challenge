import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularMaterialModule } from './app.material-module';

import { AppComponent } from './app.component';
import { ExposesComponent } from './exposes/exposes.component';
import { PropertyCardComponent } from './property-card/property-card.component';

import { AdvertisementsService } from './shared/services/advertisements.service';
import { Globals } from './shared/services/globals.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
