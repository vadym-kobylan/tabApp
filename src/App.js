import React, { Suspense, useState } from 'react';
import tabs from '/public/tabs.json';
import { Routes, Route, Navigate } from 'react-router-dom';
import TabMenu from './Components/TabMenu';
import TabContent from './Components/TabContent';
import styles from './styles.module.scss';

const App = () => {
  const sortedTabs = tabs.sort((a, b) => a.order - b.order);
  const [activeTab, setActiveTab] = useState(sortedTabs[0].id);
  return (
    <div className={styles.tabContainer}>
      <TabMenu tabs={sortedTabs} activeTab={activeTab} />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<>...</>}>
              <TabContent initialTab={sortedTabs[0].id} />
            </Suspense>
          }
        />

        <Route
          path="/:tabId"
          element={
            <Suspense fallback={<>...</>}>
              <TabContent setActiveTab={setActiveTab} />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
