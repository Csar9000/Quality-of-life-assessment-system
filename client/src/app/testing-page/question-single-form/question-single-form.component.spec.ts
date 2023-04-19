import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSingleFormComponent } from './question-single-form.component';

describe('QuestionSingleFormComponent', () => {
  let component: QuestionSingleFormComponent;
  let fixture: ComponentFixture<QuestionSingleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionSingleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionSingleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
