import { Component } from '@angular/core';
import { Interval, SearchAccommodationDto, SearchedAccommodation } from './dto/SearchAccommodationDto';
import { Accommodation } from '../model/Accommodation';
import { AccommodationService } from '../service/accommodation.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';
import { FilterParamsDTO } from './dto/FilterParamsDto';

@Component({
  selector: 'app-search-accommodation',
  templateUrl: './search-accommodation.component.html',
  styleUrls: ['./search-accommodation.component.css']
})
export class SearchAccommodationComponent {
  public searchParams: SearchAccommodationDto = {} as SearchAccommodationDto;
  public filterParams: FilterParamsDTO = {} as FilterParamsDTO;
  public interval: Interval = {} as Interval;
  public accommodations: Accommodation[] = [];
  public searchFlag: boolean = false;
  public searchedAccommodations: SearchedAccommodation[] = [];
  public userRole: string = ''

  constructor(
    private accommodationService: AccommodationService,
    private router: Router,
    private authService: AuthService
  ) {
  }

  search() {
    this.searchParams.interval = this.interval;
    this.accommodationService.searchAccommodation(this.searchParams).subscribe(data => {
      this.searchedAccommodations = data.accommodations;
      this.searchFlag = true;
    });
  }

  filter() {
    this.filterParams.accommodations = this.searchedAccommodations
    this.accommodationService.filterAccomodations(this.filterParams).subscribe(data => {
      this.searchedAccommodations = data.accommodations;
      this.searchFlag = true;
    });
  }

  ngOnInit(): void {
    this.accommodationService.getAll().subscribe(data => {
      this.accommodations = data.accommodations;
    });
    this.userRole = this.authService.getLoggedInRole();
  }

  public newAccommodation() {
    this.router.navigate(['accommodation/create']);
  }

  public view(id: string) {
    this.router.navigate(['accommodation', id]);
  }
  public createReservation(id: string, name: string) {
    this.router.navigate(['reservation/create'], { state: { accommodationId: id, name: name } });
  }

}
