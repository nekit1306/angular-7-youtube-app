import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss']
})
export class TrackItemComponent implements OnInit {
  @Input() public align: string;
  constructor() {}

  ngOnInit() {}
}
