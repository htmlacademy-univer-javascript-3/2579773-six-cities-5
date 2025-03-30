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
  const markersRef = useRef<leaflet.Marker[]>([]);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: point.id === activeOffer ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
        markersRef.current.push(marker);
      });
      return () => {
        markersRef.current.forEach((marker) => map.removeLayer(marker));
        markersRef.current = [];
      };
    }
  }, [map, points, activeOffer]);

  return (
    <div style={{height: '100%'}} ref={mapRef}></div>
  );
};

export default Map;
