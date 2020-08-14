import { Component, ViewChild, OnInit } from '@angular/core';
import { FormComponent } from './form/form.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(FormComponent) child;
  submitted = false;
  data: any[];
  failedFile = false;
  fileDownload = false;

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => {
      if (message === 'reset') {
        this.submitted = false;
        this.fileDownload = false;
      } else if (message === 'wrong-file') {
        this.submitted = false;
        this.failedFile = true;
        this.fileDownload = false;
      }
    });
  }

  receiveMessage(data) {
    this.data = data;
    this.submitted = true;
    setTimeout(() => {
      if (!this.failedFile) {
        setTimeout(() => {
          this.fileDownload = true;
        }, 7000);
      }
    });
  }

  constructor(private dataService: DataService) {}
}
