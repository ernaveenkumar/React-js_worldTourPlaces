/* eslint-disable react/prop-types */
import { useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import { useState } from 'react';
function Map() {
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  // const lat = searchParams.get('lat');
  // const lng = searchParams.get('lng');
  // const [mapPostion, setMapPosition] = useState([40, 0]);
  // function onCLickHandler() {
  //   // setMapPosition([]);
  // }
  const mapPostion = [51.505, -0.09];

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPostion}
        zoom={6}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPostion}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
