import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private authService: AuthService, private router: Router){}



  form = {username: '', password: ''};
  errorMessage: string|null = null;
  

  onSubmit() {
    this.authService.signup(this.form).subscribe({
      next: () => {
        this.router.navigate(['/home'])
      },
      error: e =>{
        if(e.error.message == "User Already Exists"){
           this.errorMessage = "This email is already in use. Please try a different one.";
        }
        else this.errorMessage = 'An unexpected error occurred. Please try again.';
      } 
    })
    // You can hook into a real service here
    console.log('Signup form submitted:', this.form);
    alert(`Welcome, ${this.form.username}!`);
  }
}
