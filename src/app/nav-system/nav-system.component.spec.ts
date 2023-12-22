import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSystemComponent } from './nav-system.component';

describe('NavSystemComponent', () => {
  let component: NavSystemComponent;
  let fixture: ComponentFixture<NavSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavSystemComponent]
    });
    fixture = TestBed.createComponent(NavSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
