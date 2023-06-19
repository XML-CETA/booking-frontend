import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../../users/model/address';
import { AccommodationService } from '../service/accommodation.service';
import { CreateAccommodationDto } from './dto/CreateAccommodationDto';

@Component({
  selector: 'app-create-accommodation',
  templateUrl: './create-accommodation.component.html',
  styleUrls: ['./create-accommodation.component.css']
})
export class CreateAccommodationComponent {

  public createAccommodation = <CreateAccommodationDto>{}
  public address = <Address>{}
  constructor(
    private accService: AccommodationService,
    private router: Router
  ){}


  create() {
    this.createAccommodation.address = this.address;
    this.accService.create(this.createAccommodation).subscribe({
			next: () => {
				alert('Created successfully');
				this.router.navigate(['/accommodations'])
			},
			error: () => alert('Something went wrong')
    })

  }

}
