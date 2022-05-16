import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightLightComponent } from './night-light.component';

describe('NightLightComponent', () => {
  let component: NightLightComponent;
  let fixture: ComponentFixture<NightLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NightLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NightLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
