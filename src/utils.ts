import { OfferPreviewType } from './types/offer-preview';
import { AppRoute } from './const';

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

function getOfferLink(id:string) {
  return `${AppRoute.Offer}/${id}`;
}

export {getFavorites, getOfferLink};
