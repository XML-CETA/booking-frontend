import { Component } from '@angular/core';
import { ReservationService } from '../service/reservation.service';
import { Reservation, Status } from './model/Reservation';
import { AuthService } from '../../auth/service/auth.service';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {
  public reservations: Reservation[] = [];
  public token: any = localStorage.getItem('token');
  public user: string = ''
  constructor(private reservationService: ReservationService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = (<any>jwtDecode(this.token)).custom_claims.email;
    this.reservationService.getAll().subscribe(data => {
      this.reservations = data.reservations;
      this.reservations = this.reservations.filter(reservation => reservation.user == this.user && reservation.status == Status.Reserved);
    });
  }

  cancelReservation(id: string) {
    this.reservationService.cancel(id).subscribe(data => {
      console.log(data);
    });
  }

  checkDate(dateFrom: string) {
    const currentDate = new Date();
    const reservationEndDate = new Date(dateFrom);
    const timeDifference = reservationEndDate.getTime() - currentDate.getTime();
    const oneDayMilliseconds = 24 * 60 * 60 * 1000;
    const daysRemaining = Math.floor(timeDifference / oneDayMilliseconds);
    return daysRemaining >= 1;
  }

  handleReservationClick(event: Event, dateTo: string, host: string): void {
    event.preventDefault(); // Prevent default navigation behavior

    if (this.isDatePast(dateTo)) {
      // Date is in the past, do not perform any action
      return;
    }

    // Date is in the future, navigate to the desired route or perform the desired action
    this.router.navigate(['/host', host, 'rate']);
  }

  isDatePast(date: string): boolean {
    const currentDate = new Date();
    const targetDate = new Date(date.replace(/-/g, '/')); // Replace hyphens with slashes for wider date format support
    return targetDate.getTime() < currentDate.getTime();
  }
}
