import { Component, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { FormComponent } from './form/form.component';
const mockData = require('./mock.json');

import {
  createChartTemplate,
  createChartData,
  separateByAgeRanges
} from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(FormComponent) child;
  submitted = true;
  data = mockData;
  chartData: any[];
  chartType: string;

  ngOnInit() {
    this.chartData = createChartData('other', mockData.results);
    this.chartType = 'other';
  }

  receiveMessage(data) {
    this.data = data;
    this.submitted = true;
  }
}
