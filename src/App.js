import React from 'react';
import tabs from '/public/tabs.json';
import { Routes, Route, Navigate } from 'react-router-dom';
import TabMenu from './Components/TabMenu';
import TabContent from './Components/TabContent';
import DummyList from './Components/DummyList';
const App = () => {
  return (
    <>
      <TabMenu tabs={tabs} />
      <Routes>
        <Route exact path="/" />
        <Route path="/tabs/:tabId" element={<DummyList />} />
      </Routes>
    </>
  );
};

export default App;
