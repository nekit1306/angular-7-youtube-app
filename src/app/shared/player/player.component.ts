import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  player: YT.Player;
  private id: string = 'qDuKsiwS5xw';

  constructor() {}

  ngOnInit(): void {
    // some content
  }

  savePlayer(player: any): void {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event: any): void {
    console.log('player state', event.data);
  }
  addToFavourites(): void {}
  togglePlayMusic(): void {}
}
