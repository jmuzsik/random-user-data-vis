import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseableChartComponent } from './reuseable-chart.component';

describe('ReuseableChartComponent', () => {
  let component: ReuseableChartComponent;
  let fixture: ComponentFixture<ReuseableChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReuseableChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuseableChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
