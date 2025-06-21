import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = { username: '', password: ''};
  errorMessage: string|null = null;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute,
    private router: Router){}

  onLogin() {
    if(this.authService.isUserAuthenticated()){
      this.errorMessage = "You are already signed in. Please sign out before logging in with a different account."
    }
    else if (this.form.username && this.form.password) {
      // Perform login logic here
      this.authService.login(this.form).subscribe({
        next: () => {
          console.log('User is logged in.')
          const targetUrl = this.activatedRoute.snapshot.queryParamMap.get('returnUrl');
          if(targetUrl) this.router.navigate([targetUrl])
          else this.router.navigate(['/home'])
        },
        error: err =>{
          if (err.status === 401 || err.status === 400) {
            this.errorMessage = 'Incorrect username or password.';
          } else {
            this.errorMessage = 'An unexpected error occurred. Please try again.';
          }
        } 
      })
    }
  }

}
