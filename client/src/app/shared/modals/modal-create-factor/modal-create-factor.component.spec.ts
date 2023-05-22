import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateFactorComponent } from './modal-create-factor.component';

describe('ModalCreateFactorComponent', () => {
  let component: ModalCreateFactorComponent;
  let fixture: ComponentFixture<ModalCreateFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateFactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreateFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
