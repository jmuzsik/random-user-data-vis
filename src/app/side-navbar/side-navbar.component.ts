import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  message: string;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => (this.message = message));
  }

  onClick(_, type) {
    this.data.changeMessage(type);
  }
}
