import { Component } from '@angular/core';
import { Interval, SearchAccommodationDto, SearchedAccommodation } from './dto/SearchAccommodationDto';
import { Accommodation } from '../model/Accommodation';
import { AccommodationService } from '../service/accommodation.service';

@Component({
  selector: 'app-search-accommodation',
  templateUrl: './search-accommodation.component.html',
  styleUrls: ['./search-accommodation.component.css']
})
export class SearchAccommodationComponent {
  public searchParams: SearchAccommodationDto = {} as SearchAccommodationDto;
  public interval: Interval = {} as Interval;
  public accommodations: Accommodation[] = [];
  public searchFlag: boolean = false;
  public searchedAccommodations: SearchedAccommodation[] = [];

  constructor(private accommodationService:AccommodationService) { 
  }

  search() {
    this.searchParams.interval = this.interval;
    console.log(this.searchParams)
    this.accommodationService.searchAccommodation(this.searchParams).subscribe(data => {
      console.log(data)
      this.searchedAccommodations = data.accommodations;
      console.log(this.searchedAccommodations);
      this.searchFlag = true;
    });
  }

  ngOnInit() : void {
    this.accommodationService.getAll().subscribe(data => {
      this.accommodations = data.accommodations;
    });
  
  }
}
