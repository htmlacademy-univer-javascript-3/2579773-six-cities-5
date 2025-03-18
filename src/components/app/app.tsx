import MainPage from '../main-page/main-page';

type AppScreenProps = {
  placesCount: number;
}

const App = ({placesCount}: AppScreenProps): JSX.Element => (
  <MainPage placesCount={placesCount}/>
);

export default App;
