import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSideMenuComponent } from './desktop-side-menu.component';

describe('DesktopSideMenuComponent', () => {
  let component: DesktopSideMenuComponent;
  let fixture: ComponentFixture<DesktopSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopSideMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
