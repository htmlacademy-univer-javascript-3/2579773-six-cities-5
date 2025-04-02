import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../main-page/main-page';
import FavoritesPage from '../favorites-page/favorites-page';
import LoginPage from '../login-page/login-page';
import OfferPage from '../offer-page/offer-page';
import ErrorPage from '../error-page/error-page';
import PrivateRoute from '../private-route/private-route';
import { OfferPreviewType } from '../../types/offer-preview';
import { CityType } from '../../types/city';

type AppScreenProps = {
  offers: OfferPreviewType[];
  cities: CityType[];
}

const App = ({offers, cities}: AppScreenProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path = {AppRoute.Main}
        element = {<MainPage offers={offers} cities={cities}/>}
      />
      <Route
        path = {AppRoute.Favorites}
        element = {
          <PrivateRoute
            authorizationStatus
          >
            <FavoritesPage offers={offers}/>
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
  </BrowserRouter>
);

export default App;
