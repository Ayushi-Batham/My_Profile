import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})


export class LoginComponentComponent {
  username: string = '';
  password: string = '';
  
  constructor(private router: Router){}

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    let usernameMatch: string = 'Ayushi_Batham';
    let passwordMatch: string = '1234567890';
    if ((this.username.match(usernameMatch))&&(this.password.match(passwordMatch))) {
      this.router.navigate(['/home']);
    }
    else {
      alert("Invalid login Credentials.")
    }
  }
}
