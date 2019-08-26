import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { ApiService } from '@app/core/api.service';
import { ChannelContext, VideoContext } from '@app/dashboard/dashboard.models';

@Injectable()
export class DashboardService {
  constructor(private apiService: ApiService) {}

  public getTopChart(context: VideoContext): Observable<any> {
      return this.apiService
          .apiGet('/videos', context)
          .pipe(
              map((res: any) => res.items),
              mergeMap((res: any) => {
                  const observables = res.map((musicItem: any) => this.getMusicWithChannel(musicItem, {
                      id  : musicItem.snippet.channelId,
                      part: 'snippet'
                  }));
                  return forkJoin(observables);
              }),
              catchError(() => of('Error, could not load joke :-('))
            );
  }

    private getMusicWithChannel(musicItem: any, context: ChannelContext): Observable<any> {
      return this.apiService
          .apiGet('/channels', context)
            .pipe(
                map((res: any) => {
                    return {
                        video  : musicItem,
                        channel: res.items[0]
                    };
                }),
                catchError(() => of('Error, could not load joke :-('))
            );
  }
}
