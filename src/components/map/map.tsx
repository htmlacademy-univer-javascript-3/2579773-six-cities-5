import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { OfferPreviewType } from '../../types/offer-preview';
import { currentCustomIcon, defaultCustomIcon } from './pin';
import useMap from '../../hooks/hooks';

type MapProps = {
  points: OfferPreviewType[];
  city: OfferPreviewType['city'];
  activeOffer: OfferPreviewType['id'] | null;
}

const Map = ({points, city, activeOffer}: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if(map) {
      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });
    }

    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: point.id === activeOffer ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, activeOffer]);

  return (
    <div style={{height: '100%'}} ref={mapRef}></div>
  );
};

export default Map;
