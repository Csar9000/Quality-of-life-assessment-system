import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionScaleFormComponent } from './question-scale-form.component';

describe('QuestionScaleFormComponent', () => {
  let component: QuestionScaleFormComponent;
  let fixture: ComponentFixture<QuestionScaleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionScaleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionScaleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
