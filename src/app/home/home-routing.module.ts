// // src/app/home/home.module.ts

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { IonicModule } from '@ionic/angular';

// import { HomePage } from './home.page'; // Ensure the correct import path

// @NgModule({
//   imports: [
//     CommonModule,
//     IonicModule,
//   ],
//   declarations: [
//     HomePage, // Remove this line if HomePage is not a component
//   ],
// })
// export class HomePageModule {}

// src/app/home/home-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

