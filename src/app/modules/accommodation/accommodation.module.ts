import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccommodationComponent } from './create-accommodation/create-accommodation.component';
import { FormsModule } from '@angular/forms';
import { SearchAccommodationComponent } from './search-accommodation/search-accommodation.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'reservation/create', component: CreateReservationComponent },
]


@NgModule({
  declarations: [
    CreateAccommodationComponent,
    SearchAccommodationComponent,
    CreateReservationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AccommodationModule { }
