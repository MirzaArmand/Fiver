import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.page.html',
  styleUrls: ['signup.page.scss'],
})
export class SignupPage {
  name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = ''
  
  signUp() {
    // Implement your sign-up logic here
    console.log('Name:', this.name);
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);
  }
}
