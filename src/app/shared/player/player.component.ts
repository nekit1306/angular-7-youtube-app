import { Component, OnInit } from '@angular/core';
import { YoutubePlayerService } from '@app/core/youtube-player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  public id: string = '';
  public isRandom: boolean = false;
  public isFavourite: boolean = false;
  public isRepeat: boolean = false;

  constructor(private youtubePlayerService: YoutubePlayerService) {}

  ngOnInit(): void {
    // some content
  }

  savePlayer(player: any): void {
    this.youtubePlayerService.initPlayer(player);
  }
  onStateChange(event: any): void {
    this.youtubePlayerService.onStateChange(event, this.isRepeat);
  }
  addToFavourites(): void {
    this.isFavourite = !this.isFavourite;
  }
  toggleRandom(): void {
    this.isRandom = !this.isRandom;
  }
  toggleRepeat(): void {
    this.isRepeat = !this.isRepeat;
  }
  playAudio(): void {
    // some func
  }
  seekTo(event: any): void {
    // some func
  }
}
