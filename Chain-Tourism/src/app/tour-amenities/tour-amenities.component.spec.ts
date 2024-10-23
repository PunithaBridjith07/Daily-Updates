import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourAmenitiesComponent } from './tour-amenities.component';

describe('TourAmenitiesComponent', () => {
  let component: TourAmenitiesComponent;
  let fixture: ComponentFixture<TourAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourAmenitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
