import { useAppDispatch, useAppSelector } from '../../hooks';
import City from '../city/city';
import { changeCity } from '../../store/action';
import { CityType } from '../../types/city';

type CityListProps = {
  cities: CityType[];
};

const CityList = ({cities}: CityListProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.city);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City city={city} key={city.name} isActive={city.name === currentCity} onClick={() => dispatch(changeCity(city.name))} />
      ))}
    </ul>
  );
};
export default CityList;
