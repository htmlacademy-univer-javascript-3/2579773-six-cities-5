import { CityType } from './city';
import { LocationType } from './location';
import { UserType } from './user';

type OfferType = {
  id: string;
  title: string;
  type: string;
  price:number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  goods: string[];
  bedrooms: number;
  description: string;
  host: UserType;
  images: string[];
  maxAdults: number;
};

export type {OfferType};
