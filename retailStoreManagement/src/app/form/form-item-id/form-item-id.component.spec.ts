import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormItemIdComponent } from './form-item-id.component';

describe('FormItemIdComponent', () => {
  let component: FormItemIdComponent;
  let fixture: ComponentFixture<FormItemIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormItemIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormItemIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
