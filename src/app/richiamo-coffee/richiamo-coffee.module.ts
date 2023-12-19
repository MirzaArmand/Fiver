import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RichiamoCoffeePageRoutingModule } from './richiamo-coffee-routing.module';

import { RichiamoCoffeePage } from './richiamo-coffee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RichiamoCoffeePageRoutingModule
  ],
  declarations: [RichiamoCoffeePage]
})
export class RichiamoCoffeePageModule {}
