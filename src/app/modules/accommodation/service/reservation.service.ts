import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservationCreateDto } from '../create-reservation/dto/ReservationCreateDto';
import { Observable } from 'rxjs';
import { Reservation, UserAcceptedReservations } from '../../users/reservation-list/model/Reservation';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) { }

  create(createDto: ReservationCreateDto) {
    return this.http.post('http://localhost:8000/reservations', createDto, httpOptions);
  }
  getAll():Observable<UserAcceptedReservations> {
    return this.http.get<UserAcceptedReservations>('http://localhost:8000/reservations');
  }
}
