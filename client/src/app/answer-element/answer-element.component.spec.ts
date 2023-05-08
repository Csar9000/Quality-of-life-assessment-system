import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerElementComponent } from './answer-element.component';

describe('AnswerElementComponent', () => {
  let component: AnswerElementComponent;
  let fixture: ComponentFixture<AnswerElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
