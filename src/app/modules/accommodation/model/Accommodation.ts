import { Address } from "../../users/model/address";

export interface Accommodation {
    id: string;
    longitude: number;
    latitude: number;
    address: Address;
    minGuests: number;
    maxGuests: number;
    name: string;
    host: string;
}

export interface AllAccommodationsResponse {
    accommodations: Accommodation[];
}

export interface Appointment {
  accommodationId: string;
  interval: {dateFrom: string; dateTo:string};
  price: number;
}

export interface AccommodationFull extends Accommodation {
  freeAppointments: Appointment[]
}

export interface RateAccommodation{
  accommodation: string;
  rate: number;
}

export interface ShowRateAccommodation{
  user: string;
  date: string;
  rate: number;
}

export interface AllRatesResponse{
  rates: ShowRateAccommodation[];
}
