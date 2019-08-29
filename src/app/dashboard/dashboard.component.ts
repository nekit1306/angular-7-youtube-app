import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { finalize } from 'rxjs/operators';
import { MusicItem } from '@app/dashboard/dashboard.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoading: boolean;
  musicList: MusicItem[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.isLoading = true;
    this.dashboardService
      .getTopChart()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data: any) => this.initMusicItems(data));
  }

  initMusicItems(items: any[]): void {
    this.musicList = items.map(item => {
      return {
        title: item.video.snippet.title.split(/[-]+/),
        channelTitle: item.video.snippet.channelTitle,
        videoId: item.video.id,
        coverImage: item.channel.snippet.thumbnails.medium.url,
        duration: item.video.contentDetails.duration,
        tags: item.video.snippet.tags.shift(),
        views: item.video.statistics.viewCount,
        likes: item.video.statistics.likeCount
      };
    });
  }
}
