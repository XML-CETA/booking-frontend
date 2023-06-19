import { Component } from '@angular/core';
import { SearchAccommodationDto } from './dto/SearchAccommodationDto';
import { Accommodation } from '../model/Accommodation';
import { AccommodationService } from '../service/accommodation.service';

@Component({
  selector: 'app-search-accommodation',
  templateUrl: './search-accommodation.component.html',
  styleUrls: ['./search-accommodation.component.css']
})
export class SearchAccommodationComponent {
  public SearchAccommodationDto: SearchAccommodationDto = {} as SearchAccommodationDto;
  public accommodations: Accommodation[] = []

  constructor(private accommodationService:AccommodationService) { 
  }

  search() {
    
  }

  ngOnInit() : void {
    this.accommodationService.getAll().subscribe(data => {
      this.accommodations = data.accommodations;
    });
  
  }
}
