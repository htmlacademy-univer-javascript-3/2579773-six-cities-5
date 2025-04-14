import Card from '../card/card';
import { getFavorites } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fillOffersList } from '../../store/action';
import {offers as mockOffers} from '../../mocks/offers';
import Header from '../header/header';

const FavoritesPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offers);

  useEffect(() => {
    if (offers.length === 0) {
      dispatch(fillOffersList(mockOffers));
    }
  }, [dispatch, offers]);

  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const favoritesByCity = getFavorites(favoriteOffers);
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(favoritesByCity).map(([city, cityOffers]) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {cityOffers.map((offer) => (
                      <Card key={offer.id} offer={offer} block="favorites" />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

export default FavoritesPage;
