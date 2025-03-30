import { ReviewType } from '../types/review';

const reviews: ReviewType[] = [
  {
    id: crypto.randomUUID(),
    date: '2019-05-08T14:13:56.569Z',
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
      name: 'Oliver Conner"'
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: crypto.randomUUID(),
    date: '2023-11-15T10:45:32.123Z',
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
      name: 'Sophia Williams'
    },
    comment: 'A vibrant, lively neighborhood near the bustling heart of the city, where the energy of local cafes and street art blend perfectly.',
    rating: 5
  },
  {
    id: crypto.randomUUID(),
    date: '2022-07-21T18:30:48.987Z',
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
      name: 'Liam Johnson'
    },
    comment: 'A peaceful corner away from the hustle and bustle, offering a perfect blend of nature and modern life with stunning views.',
    rating: 4
  },
  {
    id: crypto.randomUUID(),
    date: '2024-01-09T12:15:03.456Z',
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
      name: 'Emma Davis'
    },
    comment: 'A secluded spot in the city, surrounded by lush greenery and a tranquil lake, offering the perfect escape for anyone seeking peace.',
    rating: 5
  }
];

export {reviews};
