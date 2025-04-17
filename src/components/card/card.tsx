import { Link } from 'react-router-dom';
import { OfferPreviewType } from '../../types/offer-preview';
import { getOfferLink, getRatingWidth } from '../../utils';
import { updateFavorites } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

type CardProps = {
  offer: OfferPreviewType;
  block: string;
  onCardHover?: (offerId: OfferPreviewType['id'] | null) => void;
};

const Card = ({offer, block, onCardHover}: CardProps): JSX.Element => {
  const {id, title, type, price, previewImage, isPremium, rating, isFavorite} = offer;
  const dispatch = useAppDispatch();

  function handleMouseEnter () {
    onCardHover?.(id);
  }

  function handleMouseLeave () {
    onCardHover?.(null);
  }

  const handleBookmarkClick = () => {
    dispatch(updateFavorites({ offerId: id, status: isFavorite ? 0 : 1 }));
  };

  const imageSize = block === 'favorites' ? { width: 150, height: 110 } : { width: 260, height: 200 };
  const offerLink = getOfferLink(id);

  return (
    <article className={`${block === 'near' ? 'near-places__card' : `${block}__card`} place-card`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${block === 'near' ? 'near-places__image-wrapper' : `${block}__image-wrapper`} place-card__image-wrapper`}>
        <Link to={offerLink}>
          <img className="place-card__image" src={previewImage} width={imageSize.width} height={imageSize.height} alt={title} />
        </Link>
      </div>
      <div className={`${block === 'favorites' ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} onClick={handleBookmarkClick} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{block === 'favorites' ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{width: getRatingWidth(rating)}}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerLink}>{title}</Link>
        </h2>
        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
};

export default Card;
