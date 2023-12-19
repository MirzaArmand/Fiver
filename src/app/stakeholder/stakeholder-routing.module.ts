import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StakeholderPage } from './stakeholder.page';

const routes: Routes = [
  {
    path: '',
    component: StakeholderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StakeholderPageRoutingModule {}
