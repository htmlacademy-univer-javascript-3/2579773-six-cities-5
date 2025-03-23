import Card from '../card/card';
import { OfferPreviewType } from '../../types/offer-preview';
import {useState, ChangeEvent} from 'react';

type OfferListProps = {
  offers: OfferPreviewType[];
}

const OfferList = ({offers}: OfferListProps): JSX.Element => {
  const [activeOffer, setActiveOffer] = useState<OfferPreviewType['id'] | null>(null);

  function handleCardHover(offerId: OfferPreviewType['id'] | null) {
    setActiveOffer(offerId);
  }
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} block="cities" onCardHover={handleCardHover}/>
      ))}
    </div>
  );
};

export default OfferList;
