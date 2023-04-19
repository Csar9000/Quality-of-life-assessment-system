import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMultipleFormComponent } from './question-multiple-form.component';

describe('QuestionMultipleFormComponent', () => {
  let component: QuestionMultipleFormComponent;
  let fixture: ComponentFixture<QuestionMultipleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionMultipleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionMultipleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
