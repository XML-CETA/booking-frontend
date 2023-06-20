import { SearchedAccommodation } from "./SearchAccommodationDto";

export interface FilterParamsDTO {
    conveniences: string;
    lowPrice: number;
    highPrice: number;
    isProminent: boolean;
    accommodations: SearchedAccommodation[];
}