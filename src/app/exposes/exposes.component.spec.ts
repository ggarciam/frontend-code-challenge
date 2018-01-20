import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposesComponent } from './exposes.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../app.material-module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { Advertisement, AdvertisementsService } from '../shared/services/advertisements.service';
import { Globals } from '../shared/services/globals.service';
import { PropertyCardComponent } from '../property-card/property-card.component';

// describe('ExposesComponent', () => {
//   let component: ExposesComponent;
//   let fixture: ComponentFixture<ExposesComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ExposesComponent, PropertyCardComponent ],
//       imports: [
//         BrowserModule,
//         HttpClientModule,
//         AngularMaterialModule,
//         FlexLayoutModule
//       ],
//       providers: [
//         Globals,
//         AdvertisementsService
//       ]
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(ExposesComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
