import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RichiamoCoffeePage } from './richiamo-coffee.page';

const routes: Routes = [
  {
    path: '',
    component: RichiamoCoffeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RichiamoCoffeePageRoutingModule {}
