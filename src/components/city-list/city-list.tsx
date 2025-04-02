import { CityType } from '../../types/city';
import City from '../city/city';

type CityListProps = {
  cities: CityType[];
}

const CityList = ({cities}: CityListProps): JSX.Element => (
  <ul className="locations__list tabs__list">
    {cities.map((city) => (
      <City city={city} key={city.name}/>
    ))}
  </ul>
);
export default CityList;
