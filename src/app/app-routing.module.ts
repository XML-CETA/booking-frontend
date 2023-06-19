import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccommodationComponent } from './modules/accommodation/create-accommodation/create-accommodation.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/users/register/register.component';
import { EditProfileComponent } from './modules/users/edit-profile/edit-profile.component';
import { SearchAccommodationComponent } from './modules/accommodation/search-accommodation/search-accommodation.component';
import { CreateReservationComponent } from './modules/accommodation/create-reservation/create-reservation.component';
import { ReservationListComponent } from './modules/users/reservation-list/reservation-list.component';
import { ReservationRequestsComponent } from './modules/users/reservation-requests/reservation-requests.component';
import { NotificationsComponent } from './modules/users/notifications/notifications.component';

const routes: Routes = [
  { path: 'accommodation/create', component: CreateAccommodationComponent },
  { path: 'login',component: LoginComponent },
  { path: 'register',component:RegisterComponent },
  { path: 'profile', component: EditProfileComponent },
  { path: 'accommodation/search', component: SearchAccommodationComponent },
  { path: 'reservations', component: ReservationListComponent },
  { path: 'reservation-requests', component: ReservationRequestsComponent},
  { path: 'notifications', component: NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
