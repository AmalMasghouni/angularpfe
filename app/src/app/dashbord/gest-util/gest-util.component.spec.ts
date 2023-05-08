import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestUtilComponent } from './gest-util.component';

describe('GestUtilComponent', () => {
  let component: GestUtilComponent;
  let fixture: ComponentFixture<GestUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestUtilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
