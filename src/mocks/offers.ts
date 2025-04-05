import { CityName } from '../const';
import { OfferPreviewType } from '../types/offer-preview';

const offers: OfferPreviewType[] = [
  {
    id: '173c00f5-2ebf-43ca-8b75-3d2a6901c5a0',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: '/img/apartment-01.jpg'
  },
  {
    id: '03a78870-8692-4603-ac6b-6125ad583448',
    title: 'Cozy modern apartment in city center',
    type: 'room',
    price: 150,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    previewImage: '/img/apartment-02.jpg',
  },
  {
    id: '01c8e5a6-16a6-46ed-ad17-ff73f02fded4',
    title: 'Spacious loft with canal view',
    type: 'house',
    price: 200,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    previewImage: '/img/apartment-03.jpg',
  },
  {
    id: '6dd379af-7630-47b8-9a2c-fc5570306fdf',
    title: 'Elegant hotel in a quiet area',
    type: 'hotel',
    price: 180,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10
    },
    isFavorite: true,
    isPremium: true,
    rating: 3,
    previewImage: '/img/apartment-01.jpg',
  }
];

export {offers};
