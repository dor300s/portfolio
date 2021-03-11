import React, { useEffect, useRef, useState } from 'react';
import { NavBar } from './components/NavBar';
import { Main } from './pages/Main';

export const App = () => {
  const [currentPage, setCurrenPage] = useState(0);
  const lastTs = useRef(0);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    // window.addEventListener('touchmove', (e) => console.log(e));

    return () => window.removeEventListener('wheel', handleScroll)
  }, [])


  const handleScroll = (e) => {
    if (e.timeStamp - lastTs.current < 700) return;
    const direction = e.deltaY > 0 ? 1 : -1;
    setCurrenPage(prev => (prev + direction < 0) ? 0 : (prev + direction > 4) ? 4 : prev + direction);
    lastTs.current = e.timeStamp;
  }


  return (
    <div className="app main-container">
      <div className="app-content">
        <NavBar currentPage={currentPage} setCurrenPage={setCurrenPage} />
        <Main currentPage={currentPage} />
      </div>
    </div>
  );
}
