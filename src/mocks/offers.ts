import { CityName } from '../const';
import { OfferPreviewType } from '../types/offer-preview';

const offers: OfferPreviewType[] = [
  {
    id: crypto.randomUUID(),
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: '/img/apartment-01.jpg'
  },
  {
    id: crypto.randomUUID(),
    title: 'Cozy modern apartment in city center',
    type: 'room',
    price: 150,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    previewImage: '/img/apartment-02.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Spacious loft with canal view',
    type: 'house',
    price: 200,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.365,
        longitude: 4.902,
        zoom: 9
      }
    },
    location: {
      latitude: 52.365,
      longitude: 4.902,
      zoom: 9
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    previewImage: '/img/apartment-03.jpg',
  },
  {
    id: crypto.randomUUID(),
    title: 'Elegant hotel in a quiet area',
    type: 'hotel',
    price: 180,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.358,
        longitude: 4.881,
        zoom: 9
      }
    },
    location: {
      latitude: 52.358,
      longitude: 4.881,
      zoom: 9
    },
    isFavorite: true,
    isPremium: true,
    rating: 3,
    previewImage: '/img/apartment-01.jpg',
  }
];


export {offers};
