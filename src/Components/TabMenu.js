import React from 'react';
import styles from '../styles.module.scss';
import { Link } from 'react-router-dom';

const TabMenu = ({ tabs }) => {
  const sortedTabs = tabs.slice().sort((a, b) => a.order - b.order);

  return (
    <div className={styles.tabContainer}>
      {sortedTabs.map(({ id, title }) => (
        <Link to={`/tabs/${id}`} className={styles.tab} key={id}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default TabMenu;
