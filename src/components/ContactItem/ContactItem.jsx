import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';

import styles from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.item} key={id}>
      <div className={styles.info}>
        <div className={styles.box}>
          <FaUser />
          <p className={styles.text}>{name}</p>
        </div>
        <div className={styles.box}>
          <FaPhone />
          <p className={styles.text}>{number}</p>
        </div>
      </div>
      <button className={styles.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
