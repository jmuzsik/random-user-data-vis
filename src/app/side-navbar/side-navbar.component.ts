import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { GetFileService } from '../get-data.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  @Input() fileDownload = false;
  message: string;

  constructor(
    private data: DataService,
    private getFileService: GetFileService
  ) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => (this.message = message));
  }

  onClick(_, type) {
    this.data.changeMessage(type);
  }

  downloadFile(_) {
    this.getFileService.getFile();
  }
}
