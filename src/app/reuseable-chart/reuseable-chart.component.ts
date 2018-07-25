import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reuseable-chart',
  templateUrl: './reuseable-chart.component.html',
  styleUrls: ['./reuseable-chart.component.css']
})
export class ReuseableChartComponent implements OnInit {
  @Input() chartData: any[];
  @Input() chartType: string;

  view: number[] = [700, 400];
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  showLegend = true;
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  autoScale = true;
  xAxisLabel = 'State';
  yAxisLabel = 'Count';

  chartData1: any[];
  chartData2: any[];
  chartData3: any[];

  ngOnInit() {
    if (this.chartData.length === 3) {
      this.chartData1 = this.chartData[0];
      this.chartData2 = this.chartData[1];
      this.chartData3 = this.chartData[2];
    } else if (this.chartData.length === 2) {
      this.chartData1 = this.chartData[0];
      this.chartData2 = this.chartData[1];
    }
    console.log(this.chartData, this.chartType)
  }
}
