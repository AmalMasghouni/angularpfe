import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestConDevComponent } from './gest-con-dev.component';

describe('GestConDevComponent', () => {
  let component: GestConDevComponent;
  let fixture: ComponentFixture<GestConDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestConDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestConDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
