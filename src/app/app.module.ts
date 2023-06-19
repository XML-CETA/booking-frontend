import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccommodationModule } from './modules/accommodation/accommodation.module';
import { AuthModule } from './modules/auth/auth.module';
import { TokenInterceptor } from './modules/auth/token.interceptor';
import { RegisterComponent } from './modules/users/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { EditProfileComponent } from './modules/users/edit-profile/edit-profile.component';
import { ReservationListComponent } from './modules/users/reservation-list/reservation-list.component';
import { NotificationsComponent } from './modules/users/notifications/notifications.component';
import { WaitingReservationsComponent } from './modules/users/waiting-reservations/waiting-reservations.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    EditProfileComponent,
    ReservationListComponent,
    NotificationsComponent,
    WaitingReservationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccommodationModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
