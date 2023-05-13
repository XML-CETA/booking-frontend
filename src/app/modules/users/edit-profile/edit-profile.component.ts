import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../model/address';
import { User } from '../model/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  public user = <User> {
		name: 'as',
		role: '',
		surname: '',
		email: '',
		password: ''
	};

	public address: Address = {} as Address;

	public confirmPassword = this.user.password;

	constructor(private router: Router) {}

	public edit() {
		
		this.user.address = this.address;
		
    console.log(this.user);
	}

}
