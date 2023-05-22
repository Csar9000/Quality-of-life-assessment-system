import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFactorsComponent } from './choose-factors.component';

describe('ChooseFactorsComponent', () => {
  let component: ChooseFactorsComponent;
  let fixture: ComponentFixture<ChooseFactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseFactorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseFactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
