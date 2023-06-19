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