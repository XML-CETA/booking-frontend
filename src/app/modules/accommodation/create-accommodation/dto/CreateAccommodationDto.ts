import { Address } from "src/app/modules/users/model/address";

export interface CreateAccommodationDto {
    name: string;
    longitude: number;
    latitude: number;
    address: Address
    minGuests: number;
    maxGuests: number;
    confirmationType: 'Manual' | 'Automatic';
    conveniences: string;
}
