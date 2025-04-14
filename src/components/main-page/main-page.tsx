import { OfferPreviewType } from '../../types/offer-preview';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import CityList from '../city-list/city-list';
import { CityType } from '../../types/city';
import {useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import Sorting from '../sorting/sorting';
import { sorting } from '../../utils';
import { fetchOffers } from '../../store/api-actions';
import Spinner from '../../spinner/spinner';
import Header from '../header/header';

type MainPageProps = {
  cities: CityType[];
}

const MainPage = ({cities}: MainPageProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);

  useEffect(() => {
    if (offers.length === 0) {
      dispatch(fetchOffers());
    }
  }, [dispatch, offers]);

  const [activeOffer, setActiveOffer] = useState<OfferPreviewType['id'] | null>(null);

  const selectedCityName = useAppSelector((state) => state.city);
  const filteredOffers = offers.filter((offer) => offer.city.name === selectedCityName);
  const selectedCityData = cities.find((city) => city.name === selectedCityName) ?? cities[0];
  const selectedSort = useAppSelector((state) => state.sortOption);
  const sortedOffers = sorting[selectedSort](filteredOffers);
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

  if (isOffersLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList cities={cities} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {selectedCityName}</b>

              <Sorting />
              <OfferList offers={sortedOffers} setActiveOffer={setActiveOffer} block='cities' />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={selectedCityData} offers={filteredOffers} activeOffer={activeOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
