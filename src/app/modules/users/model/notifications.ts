export interface NotificationSettings {
  id: string;
  user: string;
  role: string;
  reservationRequest: boolean;
  reservationCancel: boolean;
  personalRating: boolean;
  accommodationRating: boolean;
  prominentStatusChange: boolean;
  reservationResponse: boolean;
}

export interface Notification {
  id: string;
  subject: string;
  content: string;
  viewed: boolean;
}

export interface NotificationResponse extends NotificationSettings {
  notifications: Notification[];
}
