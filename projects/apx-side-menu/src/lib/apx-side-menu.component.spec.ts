import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApxSideMenuComponent } from './apx-side-menu.component';

describe('ApxSideMenuComponent', () => {
  let component: ApxSideMenuComponent;
  let fixture: ComponentFixture<ApxSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApxSideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApxSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
