import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitiveMapComponent } from './cognitive-map.component';

describe('CognitiveMapComponent', () => {
  let component: CognitiveMapComponent;
  let fixture: ComponentFixture<CognitiveMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CognitiveMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CognitiveMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
