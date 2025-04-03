import { CityType } from '../../types/city';

type CityProps = {
  city: CityType;
  isActive: boolean;
  onClick: () => void;
}

const City = ({city, isActive, onClick}: CityProps): JSX.Element => {
  function handleCityChange () {
    onClick();
  }

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} href="#" onClick={handleCityChange}>
        <span>{city.name}</span>
      </a>
    </li>
  );
};
export default City;
