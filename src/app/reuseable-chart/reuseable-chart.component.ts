import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { createChartData } from '../utils';

@Component({
  selector: 'app-reuseable-chart',
  templateUrl: './reuseable-chart.component.html',
  styleUrls: ['./reuseable-chart.component.css']
})
export class ReuseableChartComponent implements OnInit {
  @Input() receivedData: any[];

  view: number[] = [700, 400];
  colorScheme = {
    domain: [
      'rgb(85, 63, 122)',
      'rgb(254,227,138)',
      'rgb(50,108,153)',
      '#AAAAAA'
    ]
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

  chartData: any[];
  chartData1: any[];
  chartData2: any[];
  chartData3: any[];

  message: string;
  chartType = 'male-female-chart';

  currentChart = 'female';

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      this.chartType = message;
      this.alterChartData(this.chartType, this.receivedData['results']);
    });
  }

  alterChartData(type, data) {
    try {
      this.chartData = createChartData(type, data);
    } catch (e) {
      this.data.changeMessage('wrong-file');
    }
    if (this.chartData.length === 3) {
      this.chartData1 = this.chartData[0];
      this.chartData2 = this.chartData[1];
      this.chartData3 = this.chartData[2];
    } else if (this.chartData.length === 2) {
      this.chartData1 = this.chartData[0];
      this.chartData2 = this.chartData[1];
    }
  }
  onClick(_, type) {
    this.currentChart = type;
  }
  constructor(private data: DataService) {}
}
