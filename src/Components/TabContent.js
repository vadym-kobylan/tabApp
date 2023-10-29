import React, { useEffect } from 'react';
import styles from '../styles.module.scss';
import { useParams } from 'react-router-dom';
import DummyTable from './DummyTable';
import DummyList from './DummyList';
import DummyChart from './DummyChart';

const TabContent = () => {
  // let { tabId } = useParams();
  // console.log(tabId);
  // let tabToRender;
  // switch (tabId) {
  //   case 'dummyTable':
  //     tabToRender = <DummyTable />;
  //     break;
  //   case 'dummyList':
  //     tabToRender = <DummyList />;
  //     break;

  //   case 'dummyChart':
  //     tabToRender = <DummyChart />;
  //     break;

  //   default:
  //     tabToRender = <></>;
  //     break;
  // }

  return <div>sadsad</div>;
};

export default TabContent;
