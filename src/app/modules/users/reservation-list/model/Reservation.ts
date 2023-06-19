export interface Reservation{
    id: string;
    accommodation: string;
    dateFrom: string;
    dateTo: string;
    guests: number;
    host: string;
    user: string;
    status: Status;
}

export interface UserAcceptedReservations{
    reservations: Reservation[];
}

export enum Status{
    Waiting,
    Reserved,
    Expired,
    Canceled
}