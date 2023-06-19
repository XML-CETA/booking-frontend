import { Component } from '@angular/core';
import { Accommodation, RateAccommodation } from '../model/Accommodation';
import { AccommodationService } from '../service/accommodation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-rate-accommodation',
  templateUrl: './rate-accommodation.component.html',
  styleUrls: ['./rate-accommodation.component.css']
})
export class RateAccommodationComponent {
  public accommodation = <Accommodation>{}
  public newRate = <RateAccommodation>{}

  constructor(
    private accService: AccommodationService,
    private route: ActivatedRoute,
    private router: Router
    ){}


  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.accService.getById(params.get('id') ?? '').subscribe(data => {
        this.accommodation = data})
    })
  }

  rateAccommodation(){
    this.newRate.accommodation=this.accommodation.id
    console.log(this.newRate)
    this.accService.rateAccommodation(this.newRate).subscribe({
			next: () => {
				alert('Created successfully');
				this.router.navigate(['/accommodations'])
			},
			error: err => {
        alert(err)
      }
    })
  }

  updateRateAccommodation(){
    this.newRate.accommodation=this.accommodation.id
    console.log(this.newRate)
    this.accService.updateRateAccommodation(this.newRate).subscribe({
			next: () => {
				alert('Updated successfully');
				this.router.navigate(['/accommodations'])
			},
			error: err => {
        alert(err)
      }
    })
  }

  deleteRateAccommodation(){
    this.newRate.accommodation=this.accommodation.id
    console.log(this.newRate)
    this.accService.deleteRateAccommodation(this.accommodation.id).subscribe({
			next: () => {
				alert('Deleted successfully');
				this.router.navigate(['/accommodations'])
			},
			error: err => {
        alert(err)
      }
    })
  }



}
