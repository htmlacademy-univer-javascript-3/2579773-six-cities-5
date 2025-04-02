import { CityType } from '../../types/city';

type CityProps = {
  city: CityType;
}

const City = ({city}: CityProps): JSX.Element => (
  <li className="locations__item">
    <a className="locations__item-link tabs__item" href="#">
      <span>{city.name}</span>
    </a>
  </li>
);
export default City;
