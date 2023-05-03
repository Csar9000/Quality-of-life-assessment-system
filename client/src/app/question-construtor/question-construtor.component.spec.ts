import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionConstrutorComponent } from './question-construtor.component';

describe('QuestionConstrutorComponent', () => {
  let component: QuestionConstrutorComponent;
  let fixture: ComponentFixture<QuestionConstrutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionConstrutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionConstrutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
