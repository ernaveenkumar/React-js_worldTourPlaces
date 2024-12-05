/* eslint-disable react/prop-types */
import { useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import { useCities } from '../../contexts/CitiesContext';

function Map() {
  // eslint-disable-next-line
  const { cities } = useCities();
  const [mapPostion, setMapPosition] = useState([51.505, -0.09]);
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  // const onCityClicked = () => {
  //   setMapPosition([lat, lng]);
  // };

  //const mapPostion = [51.505, -0.09];

  useEffect(() => {
    if (lat && lng) setMapPosition({ lat, lng });
  }, [lat, lng]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPostion}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPostion} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
export default Map;
