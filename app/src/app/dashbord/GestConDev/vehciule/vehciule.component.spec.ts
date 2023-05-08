import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehciuleComponent } from './vehciule.component';

describe('VehciuleComponent', () => {
  let component: VehciuleComponent;
  let fixture: ComponentFixture<VehciuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehciuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehciuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
