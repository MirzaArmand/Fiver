import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StakeholderPageRoutingModule } from './stakeholder-routing.module';

import { StakeholderPage } from './stakeholder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StakeholderPageRoutingModule
  ],
  declarations: [StakeholderPage]
})
export class StakeholderPageModule {}
