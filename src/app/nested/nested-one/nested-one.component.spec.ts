import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedOneComponent } from './nested-one.component';

describe('NestedOneComponent', () => {
  let component: NestedOneComponent;
  let fixture: ComponentFixture<NestedOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
      ],
      imports: [NestedOneComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NestedOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
