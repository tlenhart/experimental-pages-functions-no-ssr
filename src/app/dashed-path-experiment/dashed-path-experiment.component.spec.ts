import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashedPathExperimentComponent } from './dashed-path-experiment.component';

describe('DashedPathExperimentComponent', () => {
  let component: DashedPathExperimentComponent;
  let fixture: ComponentFixture<DashedPathExperimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashedPathExperimentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashedPathExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
