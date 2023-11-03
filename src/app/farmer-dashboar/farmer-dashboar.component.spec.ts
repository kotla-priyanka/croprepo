import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerDashboarComponent } from './farmer-dashboar.component';

describe('FarmerDashboarComponent', () => {
  let component: FarmerDashboarComponent;
  let fixture: ComponentFixture<FarmerDashboarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerDashboarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerDashboarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
