import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffListContainerComponent } from './staff-list-container.component';

describe('StaffListContainerComponent', () => {
  let component: StaffListContainerComponent;
  let fixture: ComponentFixture<StaffListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
