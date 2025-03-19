import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import OfferPage from '../offer-page/offer-page';
import ErrorPage from '../error-page/error-page';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  placesCount: number;
}

const App = ({placesCount}: AppScreenProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path = {AppRoute.Main}
        element = {<MainPage placesCount={placesCount}/>}
      />
      <Route
        path = {AppRoute.Favorites}
        element = {
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.NoAuth}
          >
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route
        path = {AppRoute.Login}
        element ={<LoginPage />}
      />
      <Route
        path = {AppRoute.Offer}
        element ={<OfferPage />}
      />
      <Route
        path = "*"
        element ={<ErrorPage />}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
