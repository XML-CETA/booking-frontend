import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccommodationComponent } from './modules/accommodation/create-accommodation/create-accommodation.component';

const routes: Routes = [
  { path: 'accommodation/create', component: CreateAccommodationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
