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
  block: string;
}

const Map = ({offers, city, activeOffer, block}: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markersRef = useRef<leaflet.Marker[]>([]);
  const mapSize = block === 'offer' ? { width: '1144px', height: '579px', margin: 'auto'} : { height: '100%' };

  useEffect(() => {
    if (map) {
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
  }, [map, offers, activeOffer]);

  return (
    <section className={`${block}__map map`}>
      <div style={mapSize} ref={mapRef}></div>
    </section>
  );
};

export default Map;
