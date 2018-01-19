import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposesComponent } from './exposes.component';

describe('ExposesComponent', () => {
  let component: ExposesComponent;
  let fixture: ComponentFixture<ExposesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExposesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExposesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
