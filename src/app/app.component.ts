import { Component, ViewChild, OnInit } from '@angular/core';
import { FormComponent } from './form/form.component';
const mockData = require('./mock.json');

import { separateMaleAndFemale, namePercentages, separateByState, separateByAgeRanges } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(FormComponent) child;
  submitted = true;
  data = mockData;

  ngOnInit() {
    console.log(this.data)
    console.log(separateByAgeRanges(this.data.results));
  }

  receiveMessage(data) {
    this.data = data;
    this.submitted = true;
  }
}
