import { useId } from 'react';

import styles from './SearchBox.module.css';

const SearchBox = ({ searchValue, onSearch }) => {
  const searchInput = useId();
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={searchInput}>
        Find contact by name
      </label>
      <input
        className={styles.input}
        type="text"
        name="search"
        id={searchInput}
        value={searchValue}
        onChange={event => onSearch(event.target.value.trim())}
      />
    </div>
  );
};

export default SearchBox;
