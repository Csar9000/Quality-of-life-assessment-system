import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalOrderComponent } from './personal-order.component';

describe('PersonalOrderComponent', () => {
  let component: PersonalOrderComponent;
  let fixture: ComponentFixture<PersonalOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
