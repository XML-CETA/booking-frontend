import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accommodation, AccommodationFull, AllAccommodationsResponse, AllRatesResponse, Appointment, RateAccommodation, ShowRateAccommodation } from '../model/Accommodation';
import { SearchAccommodationDto, SearchedAccommodationsResponse} from '../search-accommodation/dto/SearchAccommodationDto';
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

  getRatings(accommodationId: string):Observable<AllRatesResponse>{
    return this.http.get<AllRatesResponse>('http://localhost:8000/ratings/accommodation/'+accommodationId, httpOptions);
  }

  getAverageRating(accommodationId: string){
    return this.http.get<any>('http://localhost:8000/ratings/accommodation/'+accommodationId+'/average', httpOptions);
  }

  rateAccommodation(rateAccommodationDto: RateAccommodation){
    return this.http.post('http://localhost:8000/ratings/accommodation', rateAccommodationDto, httpOptions);
  }
  
  updateRateAccommodation(rateAccommodationDto: RateAccommodation){
    return this.http.put('http://localhost:8000/ratings/accommodation', rateAccommodationDto, httpOptions);
  }

  deleteRateAccommodation(accommodationId: string){
    return this.http.delete('http://localhost:8000/ratings/accommodation/'+accommodationId, httpOptions);
  }

  searchAccommodation(searchAccommodationDto: SearchAccommodationDto): Observable<SearchedAccommodationsResponse> {
    return this.http.post<SearchedAccommodationsResponse>('http://localhost:8000/accommodations/search', searchAccommodationDto, httpOptions);
  }

  getAll(): Observable<AllAccommodationsResponse> {
    return this.http.get<AllAccommodationsResponse>('http://localhost:8000/accommodations');
  }

  getById(id: string): Observable<AccommodationFull> {
    return this.http.get<AccommodationFull>(`http://localhost:8000/accommodations/${id}`, this.httpOptions);
  }

  create(accommodation: CreateAccommodationDto) {
    return this.http.post('http://localhost:8000/accommodations', JSON.stringify(accommodation), this.httpOptions);
  }

  newAppointment(appointment: Appointment) {
    return this.http.post('http://localhost:8000/accommodations/appointment', JSON.stringify(appointment), this.httpOptions);
  }
}
