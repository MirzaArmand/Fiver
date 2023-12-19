// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { IonicModule } from '@ionic/angular';
// import { FormsModule } from '@angular/forms';
// import { HomePage } from './home.page';

// import { HomePageRoutingModule } from './home-routing.module';


// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//     IonicModule,
//     HomePageRoutingModule
//   ],
//   declarations: [HomePage]
// })
// export class HomePageModule {}

// src/app/home/home.module.ts

import { HomePageRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

// ... other imports

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
