import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import OfferPage from '../offer-page/offer-page';
import ErrorPage from '../error-page/error-page';
import PrivateRoute from '../private-route/private-route';
import { OfferType } from '../../types/offer';

type AppScreenProps = {
  offers: OfferType[];
}

const App = ({offers}: AppScreenProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path = {AppRoute.Main}
        element = {<MainPage offers={offers}/>}
      />
      <Route
        path = {AppRoute.Favorites}
        element = {
          <PrivateRoute
            authorizationStatus={false}
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
