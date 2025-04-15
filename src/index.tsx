import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { cities } from './mocks/cities';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';
import { checkAuthAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory}>
      <Provider store = {store}>
        <App
          cities={cities}
        />
      </Provider>
    </HistoryRouter>
  </React.StrictMode>
);
