import Card from '../card/card';
import { OfferPreviewType } from '../../types/offer-preview';
import {useState} from 'react';

type OfferListProps = {
  offers: OfferPreviewType[];
}

const OfferList = ({offers}: OfferListProps): JSX.Element => {
  const [activeOffer, setActiveOffer] = useState<OfferPreviewType['id'] | null>(null);

  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} block="cities" onCardHover={setActiveOffer}/>
      ))}
      {activeOffer}
    </div>
  );
};

export default OfferList;
