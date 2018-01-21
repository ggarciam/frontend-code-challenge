import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCardComponent } from './property-card.component';
import { AngularMaterialModule } from '../app.material-module';

@Component({
  selector  : 'app-test-cmp',
  template  : '<app-property-card [advertisement]="mockPropertyCard"></app-property-card>',
})
class TestComponent {
  mockPropertyCard = {
    'hasFurniture': false,
    advertisementPrice: {
      baseRent: 374,
      sellPrice: 457
    },
    purpose: 0,
    title: '+++ +++ FLATSCREEN ZUM EINZUG! +++ Moderne, frisch sanierte 3 Zi-Wohnung mit herrlichem Ausblick',
    realestateSummary: {
      address: {
        street: 'Im Bonnefeld',
        number: 7,
        postalCode: 47259,
        city: 'Duisburg',
        fullAddress: 'Im Bonnefeld 7, 47259 Duisburg',
      },
      numberOfRooms: 3,
      space: 78.709999999999994
    },
    additionalId: 131175,
    advertisementAssets: {
      0: {
        titlePicture: false,
        advertisementThumbnails: {
          inventory_m: {
            url: 'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/573c7c608ffd7c0b2a8b45b6_variant_asset57ffa0ced86b1_inventoryM.jpg',
          }
        }
      }
    }
  };
}

describe('PropertyCardComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyCardComponent, TestComponent ],
      imports: [
        AngularMaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
