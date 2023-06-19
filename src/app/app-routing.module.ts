import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccommodationComponent } from './modules/accommodation/create-accommodation/create-accommodation.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/users/register/register.component';
import { EditProfileComponent } from './modules/users/edit-profile/edit-profile.component';
import { SearchAccommodationComponent } from './modules/accommodation/search-accommodation/search-accommodation.component';
import { ReservationListComponent } from './modules/users/reservation-list/reservation-list.component';
import { NotificationsComponent } from './modules/users/notifications/notifications.component';
import { ViewAccommodationComponent } from './modules/accommodation/view-accommodation/view-accommodation.component';
import { RateAccommodationComponent } from './modules/accommodation/rate-accommodation/rate-accommodation.component';
import { WaitingReservationsComponent } from './modules/users/waiting-reservations/waiting-reservations.component';

const routes: Routes = [
  { path: 'accommodation/create', component: CreateAccommodationComponent },
  { path: 'accommodation/:id', component: ViewAccommodationComponent },
  { path: 'login',component: LoginComponent },
  { path: 'register',component:RegisterComponent },
  { path: 'profile', component: EditProfileComponent },
  { path: 'accommodations', component: SearchAccommodationComponent },
  { path: 'reservations', component: ReservationListComponent },
  { path: 'notifications', component: NotificationsComponent},
  { path: 'reservations/waiting', component: WaitingReservationsComponent },,
  { path: 'accommodation/:id/rate', component: RateAccommodationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
