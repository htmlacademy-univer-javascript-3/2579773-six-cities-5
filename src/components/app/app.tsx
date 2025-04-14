import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import OfferPage from '../offer-page/offer-page';
import ErrorPage from '../error-page/error-page';
import PrivateRoute from '../private-route/private-route';
import { CityType } from '../../types/city';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { checkAuthAction } from '../../store/api-actions';
import Spinner from '../../spinner/spinner';
import { State } from '../../types/state';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';

type AppScreenProps = {
  cities: CityType[];
}

const App = ({cities}: AppScreenProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state: State) => state.authorizationStatus);

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }

  return(
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element = {<MainPage cities={cities}/>}
        />
        <Route
          path = {AppRoute.Favorites}
          element = {
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path = {AppRoute.Login}
          element ={<LoginPage />}
        />
        <Route
          path = {`${AppRoute.Offer}/:id`}
          element ={<OfferPage />}
        />
        <Route
          path = "*"
          element ={<ErrorPage />}
        />
      </Routes>
    </HistoryRouter>
  );
};

export default App;
