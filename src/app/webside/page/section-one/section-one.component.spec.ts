import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOneComponent } from './section-one.component';

describe('SectionOneComponent', () => {
  let component: SectionOneComponent;
  let fixture: ComponentFixture<SectionOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionOneComponent]
    });
    fixture = TestBed.createComponent(SectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
