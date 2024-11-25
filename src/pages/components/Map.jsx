/* eslint-disable react/prop-types */
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
function Map() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate('form');
      }}
    >
      Map
      <h1>
        {lat} and {lng}
      </h1>
    </div>
  );
}

export default Map;
