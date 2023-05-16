import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingTestCheckComponent } from './passing-test-check.component';

describe('PassingTestCheckComponent', () => {
  let component: PassingTestCheckComponent;
  let fixture: ComponentFixture<PassingTestCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassingTestCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassingTestCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
