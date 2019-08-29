import { Component, Input, OnInit } from '@angular/core';
import { YoutubePlayerService } from '@app/core';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.scss']
})
export class TrackItemComponent implements OnInit {
  @Input() public align: string;
  @Input() public item: any;
  constructor(yotubePlayerService: YoutubePlayerService) {}

  ngOnInit() {
    // someContent
  }
  playAudio() {
    // some func
  }
  addToFavourites() {
    // some func
  }
}
