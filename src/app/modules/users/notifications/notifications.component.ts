import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationResponse, NotificationSettings } from '../model/notifications';
import { RegisterServiceService } from '../service/register-service.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  public notifications = <NotificationResponse>{}
  public notificationSettings = <NotificationSettings>{
    reservationResponse: false,
    reservationCancel: false,
    personalRating: false,
    accommodationRating: false,
    prominentStatusChange: false,
    reservationRequest: false,
  }

  constructor(
    private userService: RegisterServiceService,
    private router: Router
  ){}

  ngOnInit() {
    this.getNotifications();
  }

  public return() {
    this.router.navigate(['profile']);
  }

  public updateSettings() {
    this.userService
    .updateNotificationSettings(this.notificationSettings)
    .subscribe(() => this.getNotifications())
  }

  private getNotifications() {
    this.userService
    .getNotifications()
    .subscribe(data => {
      this.notifications = data
      this.notificationSettings = <NotificationSettings>{
        reservationResponse: data.reservationResponse,
        reservationCancel: data.reservationCancel,
        personalRating: data.personalRating,
        accommodationRating: data.accommodationRating,
        prominentStatusChange: data.prominentStatusChange,
        reservationRequest: data.reservationRequest,
      }
    })
  }
}
