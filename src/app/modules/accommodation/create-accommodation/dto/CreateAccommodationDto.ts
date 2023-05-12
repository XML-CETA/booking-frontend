export interface CreateAccommodationDto {
    name: string;
    location: Location;
    convenience: string[];
    minGuests: number;
    maxGuests: number;
}