import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRegistrationPageComponent } from './info-registration-page.component';

describe('InfoRegistrationPageComponent', () => {
  let component: InfoRegistrationPageComponent;
  let fixture: ComponentFixture<InfoRegistrationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoRegistrationPageComponent]
    });
    fixture = TestBed.createComponent(InfoRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
