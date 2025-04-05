import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { OfferPreviewType } from '../../types/offer-preview';
import { currentCustomIcon, defaultCustomIcon } from './pin';
import useMap from '../../hooks/hooks';

type MapProps = {
  offers: OfferPreviewType[];
  city: OfferPreviewType['city'];
  activeOffer: OfferPreviewType['id'] | null;
}

const Map = ({offers, city, activeOffer}: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markersRef = useRef<leaflet.Marker[]>([]);

  useEffect(() => {
    if (map) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );

      offers.forEach((offer) => {
        const marker = leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: offer.id === activeOffer ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
        markersRef.current.push(marker);
      });
      return () => {
        markersRef.current.forEach((marker) => map.removeLayer(marker));
        markersRef.current = [];
      };
    }
  }, [map, city, offers, activeOffer]);

  return (
    <div style={{height: '100%'}} ref={mapRef}></div>
  );
};

export default Map;
