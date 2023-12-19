// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {

//   constructor() {}

// }

// src/app/home/home.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html', // Ensure the correct file name
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
  navigateToSignUp() {
    this.router.navigate(['/signup']);
 }
 navigateToList() {
  this.router.navigate(['/stakeholder-report']);
}
}
