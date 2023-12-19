import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {} // Inject Router

  login() {
    // Perform basic validation, ideally handle authentication logic here
    // if (this.username === 'demo' && this.password === 'password') {
      // Navigate to a different page (replace '/dashboard' with your desired route)
      this.router.navigate(['/timeline']);
    // } else {
      // Handle incorrect credentials or other logic
      // console.log('Invalid credentials');
    // }
  }
}