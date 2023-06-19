import { Component } from '@angular/core';
import { ReservationService } from '../service/reservation.service';
import { ReservationCreateDto } from './dto/ReservationCreateDto';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent {

  public accommodationId: string = '';
  public accommodationName: string = '';
  public createDto: ReservationCreateDto = {} as ReservationCreateDto;
  constructor(private reservationService:ReservationService) { }

  ngOnInit(): void {
    const state = window.history.state;
    this.accommodationId = state.accommodationId;
    this.accommodationName = state.name;
  }

  create() {
    this.createDto.accommodation = this.accommodationId;
    console.log(this.createDto)
    this.reservationService.create(this.createDto).subscribe(data => {
      console.log(data);
    });
  }

}
