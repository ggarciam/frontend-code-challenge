import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ExposesComponent } from './exposes/exposes.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdvertisementsService } from './shared/services/advertisements.service';
import { AngularMaterialModule } from './app.material-module';
import { Globals } from './shared/services/globals.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
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
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
