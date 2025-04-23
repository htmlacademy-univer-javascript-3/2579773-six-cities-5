import ReviewList from '../review-list/review-list';
import Map from '../map/map';
import { useEffect } from 'react';
import OfferList from '../offer-list/offer-list';
import { OfferPreviewType } from '../../types/offer-preview';
import CommentForm from '../comment-form/comment-form';
import Header from '../header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { fetchFavorites, fetchNearbyOffersById, fetchOfferById, fetchReviewsByOfferId } from '../../store/api-actions';
import { getRatingWidth } from '../../utils';
import FavoriteButton from '../favorite-button/favorite-button';

const OfferPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const offer = useAppSelector((state) => state.offer);
  const reviews = useAppSelector((state) => state.reviews);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  const favorites = useAppSelector((state) => state.favorites);

  const sortedReviews = [...reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 10);
  const filteredOffers = nearbyOffers.slice(0, 3);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferById(id));
      dispatch(fetchReviewsByOfferId(id));
      dispatch(fetchNearbyOffersById(id));
      dispatch(fetchFavorites());
    }
  }, [id, dispatch]);

  if (!offer) {
    return <p>Loading...</p>;
  }

  const mapOffers: OfferPreviewType[] = [...filteredOffers, {
    id: offer.id,
    title: offer.title,
    type: offer.type,
    price: offer.price,
    city: offer.city,
    location: offer.location,
    isFavorite: offer.isFavorite,
    isPremium: offer.isPremium,
    previewImage: offer.images[0],
    rating: offer.rating,
  }];

  return(
    <div className="page">
      <Header favoritesCount={favorites.length} />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.slice(0, 6).map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <FavoriteButton offerId={offer.id} isFavorite={offer.isFavorite} block="offer"/>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: getRatingWidth(offer.rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((item) => (
                    <li className="offer__inside-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {offer.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewList reviews={sortedReviews} />
                <CommentForm offerId={offer.id}/>
              </section>
            </div>
          </div>
          <section className={'offer__map map'}>
            <Map city={offer.city} offers={mapOffers} activeOffer={offer.id} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList offers={filteredOffers} block="near" />
          </section>
        </div>
      </main>
    </div>
  );
};

export default OfferPage;
