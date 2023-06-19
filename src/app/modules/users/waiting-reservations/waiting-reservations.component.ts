import { Component } from '@angular/core';
import { ReservationService } from '../service/reservation.service';
import { WaitingReservation } from '../reservation-list/model/Reservation';

@Component({
  selector: 'app-waiting-reservations',
  templateUrl: './waiting-reservations.component.html',
  styleUrls: ['./waiting-reservations.component.css']
})
export class WaitingReservationsComponent {
  public reservations: WaitingReservation[] = [];

  constructor(private reservationService:ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getWaitingReservations().subscribe(data => {
      this.reservations = data.reservations;
    });
  }

  declineReservation(id: string){
    this.reservationService.decline(id).subscribe(data => {
      console.log(data);
    });
  }

  confirmReservation(id: string){

    this.reservationService.confirm(id).subscribe(data => {
      console.log(data);
    });
  }

}
