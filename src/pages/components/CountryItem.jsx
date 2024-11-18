/* eslint-disable react/prop-types */
import styles from './CountryItem.module.css';

function CountryItem({ cnt }) {
  return (
    <div>
      <li className={styles.countryItem}>
        <span>{cnt.emoji}</span>
        <span>{cnt.country}</span>
      </li>
    </div>
  );
}
export default CountryItem;
