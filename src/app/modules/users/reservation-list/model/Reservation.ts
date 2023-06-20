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

export interface WaitingReservation {
    id: string;
    accommodation: string;
    dateFrom: string;
    dateTo: string;
    guests: number;
    user: string;
    userCanceledReservations: number
}

export interface HostWaitingReservationsResponse{
    reservations: WaitingReservation[];
}

export interface UserRate{
    ratedUser:string;
    rate: number;
}