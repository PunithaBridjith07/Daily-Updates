import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusContentComponent } from './menus-content.component';

describe('MenusContentComponent', () => {
  let component: MenusContentComponent;
  let fixture: ComponentFixture<MenusContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenusContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
