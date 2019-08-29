import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { TranslateModule } from '@ngx-translate/core';
import { OwlModule } from 'ngx-owl-carousel';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, DashboardRoutingModule, OwlModule],
  declarations: [DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule {}
