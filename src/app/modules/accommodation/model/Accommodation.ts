import { Address } from "../../users/model/address";

export interface Accommodation {
    longitude: number;
    latitude: number;
    address: Address;
    minGuests: number;
    maxGuests: number;
    name: string;
  }