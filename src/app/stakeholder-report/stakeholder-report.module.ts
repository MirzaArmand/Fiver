import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StakeholderReportPageRoutingModule } from './stakeholder-report-routing.module';

import { StakeholderReportPage } from './stakeholder-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StakeholderReportPageRoutingModule
  ],
  declarations: [StakeholderReportPage]
})
export class StakeholderReportPageModule {}
