import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LopinPageComponent } from './lopin-page.component';

describe('LopinPageComponent', () => {
  let component: LopinPageComponent;
  let fixture: ComponentFixture<LopinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LopinPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LopinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
