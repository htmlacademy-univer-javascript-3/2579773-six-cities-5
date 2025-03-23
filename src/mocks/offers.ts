import { CityName } from '../const';
import { OfferType } from '../types/offer';

const offers: OfferType[] = [
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
    previewImage: '/img/apartment-01.jpg',
    images: [
      '/img/amsterdam.jpg',
      '/public/img/apartment-small-04.jpg',
      '/public/img/amsterdam.jpg',
      '/public/img/studio-01.jpg',
      '/public/img/studio-01.jpg',
      '/public/img/studio-01.jpg',
    ],
    bedrooms: 2,
    maxAdults: 3,
    goods: ['Heating', 'Wi-Fi'],
    description: 'A beautiful apartment in the heart of the city.',
    host: {
      avatarUrl: '/img/avatar-max.jpg',
      isPro: true,
      name: 'John Doe'
    }
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
    images: [
      '/img/amsterdam.jpg',
      '/public/img/apartment-small-04.jpg',
      '/img/amsterdam.jpg',
      '/public/img/studio-01.jpg',
      '/public/img/studio-01.jpg',
      '/public/img/studio-01.jpg',
    ],
    bedrooms: 1,
    maxAdults: 2,
    goods: ['Wi-Fi', 'Coffee machine'],
    description: 'A small but cozy apartment for travelers.',
    host: {
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: false,
      name: 'Alice Brown'
    }
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
    images: [
      '/img/amsterdam.jpg',
      '/public/img/apartment-small-04.jpg',
      '/public/img/studio-01.jpg',
      '/public/img/studio-01.jpg',
      '/public/img/studio-01.jpg',
    ],
    bedrooms: 3,
    maxAdults: 4,
    goods: ['Kitchen', 'Parking', 'Heating'],
    description: 'A spacious and stylish loft with an amazing canal view.',
    host: {
      avatarUrl: '/img/avatar-max.jpg',
      isPro: true,
      name: 'Michael Smith'
    }
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
    images: [
      '/img/amsterdam.jpg',
      '/public/img/apartment-small-04.jpg',
      '/img/amsterdam.jpg',
      '/public/img/studio-01.jpg',
      '/public/img/studio-01.jpg',
      '/public/img/studio-01.jpg',
    ],
    bedrooms: 2,
    maxAdults: 3,
    goods: ['Air conditioning', 'Breakfast', 'Lake view'],
    description: 'An elegant and peaceful hotel with a fantastic view.',
    host: {
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: false,
      name: 'Emily Johnson'
    }
  }
];


export {offers};
