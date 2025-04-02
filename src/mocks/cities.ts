import { CityName } from '../const';
import { CityType } from '../types/city';

const cities: CityType[] = [
  { name: CityName.Paris,
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 10
    }
  },
  { name: CityName.Cologne,
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 10
    }
  },
  { name: CityName.Brussels,
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 10
    }
  },
  { name: CityName.Amsterdam,
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 10
    }
  },
  { name: CityName.Hamburg,
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 10
    }
  },
  { name: CityName.Dusseldorf,
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 10
    }
  },
];

export {cities};
