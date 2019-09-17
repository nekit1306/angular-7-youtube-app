import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SharedModule } from '@app/shared';
import { FormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SearchRoutingModule, SharedModule, FormsModule, OwlModule]
})
export class SearchModule {}
