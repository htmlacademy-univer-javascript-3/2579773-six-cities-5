import Card from '../card/card';
import { OfferPreviewType } from '../../types/offer-preview';

type OfferListProps = {
  offers: OfferPreviewType[];
  setActiveOffer:(id: OfferPreviewType['id'] | null) => void;
}

const OfferList = ({offers, setActiveOffer}: OfferListProps): JSX.Element => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (
      <Card key={offer.id} offer={offer} block="cities" onCardHover={setActiveOffer} />
    ))}
  </div>
);
export default OfferList;
