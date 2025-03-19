const ErrorPage = (): JSX.Element => (
  <div className="page page--favorites-empty">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  <span className="header__favorite-count">0</span>
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

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
