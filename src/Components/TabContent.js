import React from 'react';
import { useParams } from 'react-router-dom';
import DummyTable from './DummyTable';
import DummyList from './DummyList';
import DummyChart from './DummyChart';

const mapTabs = {
  dummyTable: <DummyTable />,
  dummyChart: <DummyChart />,
  dummyList: <DummyList />,
};

const TabContent = ({ initialTab }) => {
  const { tabId } = useParams();

  return <div>{mapTabs[tabId || initialTab]}</div>;
};

export default TabContent;
