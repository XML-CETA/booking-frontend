import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../model/address';
import { User, UserData } from '../model/user';
import { RegisterServiceService } from '../service/register-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  public user = <UserData> {
		name: 'as',
		role: '',
		surname: '',
		email: '',
		password: '',
    isProminent: false
	};

	public address: Address = {} as Address;

	public confirmPassword = this.user.password;

	constructor(
    private router: Router,
    private userService: RegisterServiceService
  ) {}

  ngOnInit() {
    this.userService.getUserData().subscribe(data => {
        this.user = data
        this.address = data.address
    })
  }

	public edit() {
		this.user.address = this.address;
    this.userService.editUser(<User>{...this.user}).subscribe(data => console.log(data))
	}

	public deleteUser() {
    this.userService.deleteUser().subscribe(data => console.log(data))
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
	}

}
