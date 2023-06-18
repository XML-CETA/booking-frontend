import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { LoginDto } from '../model/loginDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router:Router) { }
  public loginDto: LoginDto = {} as LoginDto;
  public usernameControl = new FormControl('', Validators.required);
  public passwordControl = new FormControl('', Validators.required);
  public errorMessage:string = '';

  get validateFields():boolean {
    return (this.usernameControl.valid && this.passwordControl.valid);
  }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.loginDto).subscribe(
      (data) => {
        localStorage.setItem('token', (<{token: string}>data).token);
        this.router.navigate(['/']);
      },
      error => {
          this.errorMessage = 'Invalid username or password';
      }
    );

  }

}
