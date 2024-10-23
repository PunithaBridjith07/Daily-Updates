import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourSelectedComponent } from './tour-selected.component';

describe('TourSelectedComponent', () => {
  let component: TourSelectedComponent;
  let fixture: ComponentFixture<TourSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
