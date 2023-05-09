import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsInTestComponent } from './questions-in-test.component';

describe('QuestionsInTestComponent', () => {
  let component: QuestionsInTestComponent;
  let fixture: ComponentFixture<QuestionsInTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsInTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsInTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
