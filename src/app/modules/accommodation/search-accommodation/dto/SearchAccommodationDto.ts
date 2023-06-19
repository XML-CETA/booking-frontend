import { Address } from "src/app/modules/users/model/address";

export interface SearchAccommodationDto {
    country: string;
    city: string;
    guestsNumber: number;
    interval: Interval;
}

export interface Interval {
    dateFrom: string;
    dateTo: string;
}

export interface SearchedAccommodation {
    id: string;
    address: Address;
    guestsNumber: number;
    name: string;
    host: string;
    totalPrice: number;
    unitPrice: number;
}

export interface SearchedAccommodationsResponse {
    accommodations: SearchedAccommodation[];
}