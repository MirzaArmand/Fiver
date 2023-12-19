import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StakeholderReportPage } from './stakeholder-report.page';

const routes: Routes = [
  {
    path: '',
    component: StakeholderReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StakeholderReportPageRoutingModule {}
