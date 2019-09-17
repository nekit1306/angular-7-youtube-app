import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { YoutubeApiService } from '@app/core/api/youtube-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public isLoading: boolean = false;
  public musicList: any[] = [];
  public searchValue: string = '';
  constructor(private youtubeApiService: YoutubeApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    const query = this.route.snapshot.queryParamMap.get('q');
    this.searchValue = query;
    this.searchQuery(query);
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
          coverImage: item.channel.snippet.thumbnails.medium.url,
          tags: item.video.tags
        }));
      });
  }
  submitForm() {
    this.searchQuery(this.searchValue);
  }
}
