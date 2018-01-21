import { async, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AdvertisementsService } from './advertisements.service';
import { Globals } from './globals.service';

describe('AdvertisementsService', () => {
  let injector: TestBed;
  let service: AdvertisementsService;
  let globals: Globals;
  let httpMock: HttpTestingController;
  const advertisements = {
    data: [
      {
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
      },
      {
        'hasFurniture': false,
        advertisementPrice: {
          baseRent: 374,
          sellPrice: 457
        },
        purpose: 0,
        title: 'Lichtdurchflutete 3-Zi DG-Wohnung',
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
        additionalId: 138814,
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
      }
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdvertisementsService, Globals]
    });
    injector = getTestBed();
    service = injector.get(AdvertisementsService);
    globals = injector.get(Globals);
    httpMock = injector.get(HttpTestingController);
    })
  );

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get 2 advertisements', () => {
    service.getAdvertisements().subscribe( ads => {
      expect(ads.length).toBe(2);
    });

    const req = httpMock.expectOne('https://cors-anywhere.herokuapp.com/https://api.mcmakler.de/v1/advertisements');
    expect(req.request.method).toBe('GET');
    req.flush(advertisements);
  });
});
