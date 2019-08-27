import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { SidebarComponent } from '@app/shared/sidebar/sidebar.component';
import { MastheadComponent } from '@app/shared/masthead/masthead.component';
import { RouterModule } from '@angular/router';
import { PlayerComponent } from '@app/shared/player/player.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { TrackItemComponent } from './track-item/track-item.component';

@NgModule({
  imports: [CommonModule, NgbModule, FormsModule, RouterModule, NgxYoutubePlayerModule.forRoot()],
  declarations: [LoaderComponent, SidebarComponent, MastheadComponent, PlayerComponent, TrackItemComponent],
  exports: [LoaderComponent, SidebarComponent, MastheadComponent, PlayerComponent]
})
export class SharedModule {}
