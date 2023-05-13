import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccommodationComponent } from './modules/accommodation/create-accommodation/create-accommodation.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/users/register/register.component';
import { EditProfileComponent } from './modules/users/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: 'accommodation/create', component: CreateAccommodationComponent },
  { path: 'login',component: LoginComponent },
  { path: 'register',component:RegisterComponent },
  { path: 'profile', component: EditProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
