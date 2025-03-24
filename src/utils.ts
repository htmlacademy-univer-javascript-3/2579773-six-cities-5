import { OfferPreviewType } from './types/offer-preview';

function getFavorites(favorites:OfferPreviewType[]) {
  return favorites.reduce<{ [key: string]: OfferPreviewType[] }>((acc, curr) => {
    const city = curr.city.name;
    if(!(city in acc)) {
      acc[city] = [];
    }
    acc[city].push(curr);
    return acc;
  }, {});
}

export {getFavorites};
