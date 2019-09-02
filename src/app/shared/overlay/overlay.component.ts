import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { YoutubeApiService } from '@app/core/api/youtube-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  @Input() public isOpen: boolean = false;
  @Output() public closeEvent = new EventEmitter();
  public searchValue: string = '';
  public musicList: any[] = [];
  constructor(private youtubeApiService: YoutubeApiService, private router: Router) {}

  ngOnInit() {}
  onSubmit() {
    const val = this.searchValue;
    if (val) {
      this.router.navigate(['/search'], { queryParams: { q: val } });
      this.onClose();
    }
  }
  onClose() {
    this.closeEvent.emit();
  }
}
