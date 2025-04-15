import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import OfferPage from '../offer-page/offer-page';
import ErrorPage from '../error-page/error-page';
import PrivateRoute from '../private-route/private-route';
import { CityType } from '../../types/city';
import { useAppSelector } from '../../hooks';
import Spinner from '../../spinner/spinner';
import { State } from '../../types/state';

type AppScreenProps = {
  cities: CityType[];
}

const App = ({cities}: AppScreenProps): JSX.Element => {
  const authorizationStatus = useAppSelector((state: State) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }

  return(
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
  );
};

export default App;
