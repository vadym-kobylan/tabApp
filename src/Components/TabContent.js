import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles.module.scss';

const DummyTable = React.lazy(() => import('../tabs/DummyTable'));
const DummyList = React.lazy(() => import('../tabs/DummyList'));
const DummyChart = React.lazy(() => import('../tabs/DummyChart'));

const mapTabs = {
  dummyTable: <DummyTable />,
  dummyChart: <DummyChart />,
  dummyList: <DummyList />,
};

const TabContent = ({ initialTab, setActiveTab }) => {
  const { tabId } = useParams();
  return <div className={styles.tabContent}>{mapTabs[tabId || initialTab]}</div>;
};

export default TabContent;
