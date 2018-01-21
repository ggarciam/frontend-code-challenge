import { async, TestBed, getTestBed } from '@angular/core/testing';

import { Globals } from './globals.service';

describe('GlobalsService', () => {
  let injector: TestBed;
  let service: Globals;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [Globals]
    });
    injector = getTestBed();
    service = injector.get(Globals);
    })
  );


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return url', () => {
    expect(service.url).toBe('https://api.mcmakler.de/v1/advertisements');
  });

  it('should return number of ads', () => {
    expect(service.number_ads).toBe(10);
  });
});
