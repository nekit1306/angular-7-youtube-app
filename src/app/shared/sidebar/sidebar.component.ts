import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuFullWidth: boolean = true;

  constructor() {}

  ngOnInit() {
    // console.log('Hello Home');
  }
}
