import React from 'react';
import styles from '../styles.module.scss';
import { Link } from 'react-router-dom';

const TabMenu = ({ tabs, activeTab }) => {
  return (
    <div className={styles.tabButtonsWrapper}>
      {tabs.map(({ id, title }) => (
        <Link to={`/${id}`} className={activeTab === id ? styles.activeTab : styles.tab} key={id}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default TabMenu;
