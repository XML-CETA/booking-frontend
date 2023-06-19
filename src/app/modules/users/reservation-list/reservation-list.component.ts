import { Component } from '@angular/core';
import { ReservationService } from '../service/reservation.service';
import { Reservation, Status } from './model/Reservation';
import { AuthService } from '../../auth/service/auth.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
    public reservations: Reservation[] = [];
    public token: any = localStorage.getItem('token');
    public user: string = ''
    constructor(private reservationService:ReservationService, private authService: AuthService) { }
  
    ngOnInit(): void {
      this.user = (<any>jwtDecode(this.token)).custom_claims.email;
      this.reservationService.getAll().subscribe(data => {
        this.reservations = data.reservations;
        this.reservations = this.reservations.filter(reservation => reservation.user == this.user && reservation.status == Status.Reserved );
      });
    }

    cancelReservation(id: string){
      this.reservationService.cancel(id).subscribe(data => {
        console.log(data);
      });
    }

    checkDate(dateFrom:string){
      const currentDate = new Date();
      const reservationEndDate = new Date(dateFrom);
      const timeDifference = reservationEndDate.getTime() - currentDate.getTime();
      const oneDayMilliseconds = 24 * 60 * 60 * 1000;
      const daysRemaining = Math.floor(timeDifference / oneDayMilliseconds);
      return daysRemaining >= 1;
    }
}
