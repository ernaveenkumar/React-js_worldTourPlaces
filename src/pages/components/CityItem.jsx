/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  console.log(city);
  return (
    <div>
      <li>
        <Link
          className={styles.cityItem}
          to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        >
          <span className={styles.emoji}>{emoji}</span>
          <h3 className={styles.name}>{cityName}</h3>
          <time className={styles.date}>{date}</time>
          <button className={styles.deleteBtn}>&times;</button>
        </Link>
      </li>
    </div>
  );
}
export default CityItem;
