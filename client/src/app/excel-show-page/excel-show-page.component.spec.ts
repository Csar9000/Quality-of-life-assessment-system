import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelShowPageComponent } from './excel-show-page.component';

describe('ExcelShowPageComponent', () => {
  let component: ExcelShowPageComponent;
  let fixture: ComponentFixture<ExcelShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelShowPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
