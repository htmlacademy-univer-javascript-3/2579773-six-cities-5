import Header from '../header/header';

const ErrorPage = (): JSX.Element => (
  <div className="page page--favorites-empty">
    <Header favoritesCount={0} />

    <main className="page__main page__main--error">
      <div className="page__error-container container">
        <section className="error error--empty">
          <h1 className="visually-hidden">404 Not Found</h1>
          <div style={{
            fontSize: '50px',
            textAlign: 'center',
            marginTop: '100px'
          }} className="error__status-wrapper"
          >
            <b className="error__status">404 Not Found</b>
          </div>
        </section>
      </div>
    </main>
  </div>
);

export default ErrorPage;
