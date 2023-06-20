import { Component } from '@angular/core';
import { RegisterServiceService } from '../service/register-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRate } from '../reservation-list/model/Reservation';

@Component({
  selector: 'app-rate-host',
  templateUrl: './rate-host.component.html',
  styleUrls: ['./rate-host.component.css']
})
export class RateHostComponent {
  public hostUsername :string = '';
  public newRate = <UserRate>{};

  constructor(
    private userService: RegisterServiceService,
    private route: ActivatedRoute,
    private router: Router
    ){}


  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.hostUsername=params.get('username') ?? ''
    })
  }

  rateHost(){
    this.newRate.ratedUser=this.hostUsername
    this.userService.rateUser(this.newRate).subscribe({
			next: () => {
				alert('Rated successfully');
				this.router.navigate(['/'])
			},
			error: err => {
        alert(err)
      }
    })
  }

  updateRateHost(){
    this.newRate.ratedUser=this.hostUsername
    this.userService.updateRateUser(this.newRate).subscribe({
			next: () => {
				alert('Updated successfully');
				this.router.navigate(['/'])
			},
			error: err => {
        alert(err)
      }
    })
  }

  deleteRateHost(){
    this.newRate.ratedUser=this.hostUsername
    this.userService.deleteRateUser(this.hostUsername).subscribe({
			next: () => {
				alert('Deleted successfully');
				this.router.navigate(['/'])
			},
			error: err => {
        alert(err)
      }
    })
  }
}
