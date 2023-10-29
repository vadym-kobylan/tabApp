import React from 'react';
import tabs from '/public/tabs.json';
import { Routes, Route, Navigate } from 'react-router-dom';
import TabMenu from './Components/TabMenu';
import TabContent from './Components/TabContent';

const App = () => {
  const sortedTabs = tabs.sort((a, b) => a.order - b.order);
  console.log(sortedTabs);
  return (
    <>
      <TabMenu tabs={tabs} />
      <Routes>
        <Route exact path="*" element={<Navigate to="/tabs" />} />
        <Route path="/tabs/:tabId" element={<TabContent tabs={sortedTabs} />} />
        <Route path="/tabs" element={<TabContent tabs={sortedTabs} />} />
      </Routes>
    </>
  );
};

export default App;
