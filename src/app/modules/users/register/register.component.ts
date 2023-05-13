import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { RegisterServiceService } from '../service/register-service.service';
import { Address } from '../model/address';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public user = <User> {
		name: '',
		role: '',
		surname: '',
		email: '',
		password: ''
	};

	public address: Address = {} as Address;

	public emailControl = new FormControl('', Validators.required);
	public passwordControl = new FormControl('', Validators.required);
	public nameControl = new FormControl('', Validators.required);
	public surnameControl = new FormControl('', Validators.required);
	public roleControl = new FormControl('', Validators.required);
	public countryControl = new FormControl('', Validators.required);
	public cityControl = new FormControl('', Validators.required);
	public streetControl = new FormControl('', Validators.required);
	public numberControl = new FormControl('', Validators.required);

	public confirmPassword = this.user.password;

	constructor(
		private registerService: RegisterServiceService,
		private router: Router
	) {}

	public register() {
		if (this.validatePassword()) {
			alert('Passwords do not match');
			return;
		}
		this.user.address = this.address;
		
		this.registerService.register(this.user).subscribe({
			next: () => {
				alert('Registered successfully');
				this.router.navigate(['/'])
			},
			error: () => alert('Username taken')
		});
	}

	public validateFields() {
		return this.emailControl.valid &&
			this.passwordControl.valid &&
			this.nameControl.valid &&
			this.surnameControl.valid &&
			this.roleControl.valid;
	}

	private validatePassword() {
		return this.confirmPassword !== this.user.password;
	}
}
