import { useState } from 'react';
import './App.css';
import MainSection from './components/main';
import SidePanel from './components/aside';
function App() {
  return (
    <>
      <MainSection />
      <SidePanel />
    </>
  );
}

export default App;
