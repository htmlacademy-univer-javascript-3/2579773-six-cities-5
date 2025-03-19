const CardsInfo = {
  PlacesCount: 5
};

const enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH'
}

export {CardsInfo, AppRoute, AuthorizationStatus};
