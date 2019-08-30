import { Component, Input, OnInit } from '@angular/core';
import { OverlayService } from '@app/shared/overlay/overlay.service';
import { YoutubeApiService } from '@app/core/api/youtube-api.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  @Input() public isOpen: boolean = false;
  public searchInput: string = '';
  public isLoading: boolean = false;
  public musicList: any[] = [];
  constructor(private youtubeApiService: YoutubeApiService) {}

  ngOnInit() {}
  onChange(value: string) {
    if (value) {
      this.searchQuery(value);
    }
  }
  searchQuery(value: string) {
    this.isLoading = true;
    this.youtubeApiService
      .getSearchMusic(value)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data: any) => {
        console.log(data);
        this.musicList = data.map((item: any) => ({
          title: item.video.snippet.title.split(/[-]+/),
          channelTitle: item.video.snippet.channelTitle,
          videoId: item.video.id,
          coverImage: item.channel.snippet.thumbnails.medium.url
        }));
      });
  }
}
