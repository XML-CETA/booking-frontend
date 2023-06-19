import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservationCreateDto } from '../../accommodation/create-reservation/dto/ReservationCreateDto';
import { Observable } from 'rxjs';
import { HostWaitingReservationsResponse, Reservation, UserAcceptedReservations } from '../reservation-list/model/Reservation';

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

  cancel(id: string) {
    return this.http.delete(`http://localhost:8000/reservations/${id}`);
  }

  getWaitingReservations():Observable<HostWaitingReservationsResponse> {
    return this.http.get<HostWaitingReservationsResponse>('http://localhost:8000/reservations/waiting');
  }

  decline(id: string) {
    return this.http.delete(`http://localhost:8000/reservations/waiting/${id}`);
  }

  confirm(id: string) {
    return this.http.put(`http://localhost:8000/reservations/confirm/${id}`, {});
  }
}
