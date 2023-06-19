export interface Reservation{
    id: number;
    accommodation: string;
    dateFrom: string;
    dateTo: string;
    guests: number;
    host: string;
    user: string;
}

export interface UserAcceptedReservations{
    reservations: Reservation[];
}