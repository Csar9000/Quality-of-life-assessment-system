import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingDepartmentsListComponent } from './testing-departments-list.component';

describe('TestingDepartmentsListComponent', () => {
  let component: TestingDepartmentsListComponent;
  let fixture: ComponentFixture<TestingDepartmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingDepartmentsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingDepartmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
