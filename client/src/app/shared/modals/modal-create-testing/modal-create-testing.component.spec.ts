import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateTestingComponent } from './modal-create-testing.component';

describe('ModalCreateTestingComponent', () => {
  let component: ModalCreateTestingComponent;
  let fixture: ComponentFixture<ModalCreateTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreateTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
