import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSingleConstructorComponent } from './question-single-constructor.component';

describe('QuestionSingleConstructorComponent', () => {
  let component: QuestionSingleConstructorComponent;
  let fixture: ComponentFixture<QuestionSingleConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionSingleConstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionSingleConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
