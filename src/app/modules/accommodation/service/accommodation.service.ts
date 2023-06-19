import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accommodation, AllAccommodationsResponse } from '../model/Accommodation';
import { SearchAccommodationDto, SearchedAccommodationsResponse } from '../search-accommodation/dto/SearchAccommodationDto';
import { Observable } from 'rxjs';
import { CreateAccommodationDto } from '../create-accommodation/dto/CreateAccommodationDto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  private httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  constructor(private http:HttpClient) { }

  searchAccommodation(searchAccommodationDto: SearchAccommodationDto): Observable<SearchedAccommodationsResponse> {
    return this.http.post<SearchedAccommodationsResponse>('http://localhost:8000/accommodations/search', searchAccommodationDto, httpOptions);
  }

  getAll(): Observable<AllAccommodationsResponse> {
    return this.http.get<AllAccommodationsResponse>('http://localhost:8000/accommodations');
  }

  create(accommodation: CreateAccommodationDto) {
    return this.http.post('http://localhost:8000/accommodations', JSON.stringify(accommodation), this.httpOptions);
  }
}
