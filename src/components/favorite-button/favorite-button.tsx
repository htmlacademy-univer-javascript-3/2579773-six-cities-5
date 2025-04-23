import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { updateFavorites } from '../../store/api-actions';

type FavoriteButtonProps = {
  offerId: string;
  isFavorite: boolean;
  block: 'card' | 'offer';
};

const FavoriteButton = ({ offerId, isFavorite, block }: FavoriteButtonProps): JSX.Element => {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
      return;
    }

    dispatch(updateFavorites({ offerId, status: isFavorite ? 0 : 1 }));
  };

  const buttonClass =
    block === 'offer'
      ? `offer__bookmark-button button ${isFavorite ? 'offer__bookmark-button--active' : ''}`
      : `place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`;

  const iconClass =
    block === 'offer' ? 'offer__bookmark-icon' : 'place-card__bookmark-icon';

  const iconSize =
    block === 'offer' ? { width: 31, height: 33 } : { width: 18, height: 19 };

  return (
    <button className={buttonClass} type="button" onClick={handleClick}>
      <svg className={iconClass} width={iconSize.width} height={iconSize.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
};

export default FavoriteButton;
