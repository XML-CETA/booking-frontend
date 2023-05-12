import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccommodationComponent } from './create-accommodation/create-accommodation.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateAccommodationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AccommodationModule { }
