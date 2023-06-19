import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accommodation, AllAccommodationsResponse } from '../model/Accommodation';
import { SearchAccommodationDto } from '../search-accommodation/dto/SearchAccommodationDto';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  constructor(private http:HttpClient) { }

  searchAccommodation(searchAccommodationDto: SearchAccommodationDto): Observable<Accommodation[]> {
    return this.http.post<Accommodation[]>('http://localhost:8000/accommodations/search', searchAccommodationDto, httpOptions);
  }

  getAll(): Observable<AllAccommodationsResponse> {
    return this.http.get<AllAccommodationsResponse>('http://localhost:8000/accommodations');
  }

}
