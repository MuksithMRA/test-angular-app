import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  constructor(
    private router: Router,
    private authentication: AuthenticationService
  ) { }

  onGoHome(): void {
    if (this.authentication.login()) {
      this.router.navigate(['/home'])
    }
  }
}
