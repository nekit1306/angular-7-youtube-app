import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoading: boolean;
  musicList: any[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.isLoading = true;
    this.dashboardService
      .getTopChart({
        part: 'snippet, contentDetails, statistics',
        chart: 'mostPopular',
        maxResults: 10,
        videoCategoryId: 10
      })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((data: any) => {
        this.setMusicList(data);
      });
  }
  setMusicList(data: any) {
    data.forEach((item: any) => {
      this.musicList.push({
        title: item.video.snippet.title.split(/[-]+/),
        channelTitle: item.video.snippet.channelTitle,
        videoId: item.video.id,
        coverImage: item.channel.snippet.thumbnails.medium.url,
        duration: item.video.contentDetails.duration,
        tags: item.video.snippet.tags.shift(),
        statistics: {
          views: item.video.statistics.viewCount,
          likes: item.video.statistics.likeCount
        }
      });
    });
  }

  getSubArray(start: number, end: number) {
    return this.musicList.slice(start, end);
  }
}
