import React, { useEffect, useRef, useState } from 'react';
import { NavBar } from './components/NavBar';
import { Main } from './pages/Main';

export const App = () => {
  const [currentPage, setCurrenPage] = useState(0);
  const lastTs = useRef(0);
  const lastTouchY = useRef(null);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleTouch);
    window.addEventListener('touchmove', handleTouch);


    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchmove', handleTouch);
    }
  }, [])


  const handleScroll = (e) => {
    if (e.timeStamp - lastTs.current < 700) return;
    const direction = e.deltaY > 0 ? 1 : -1;
    setCurrenPage(prev => (prev + direction < 0) ? 0 : (prev + direction > 4) ? 4 : prev + direction);
    lastTs.current = e.timeStamp;
  }

  const handleTouch = (e) => {
    if (e.changedTouches.length !== 1 || e.timeStamp - lastTs.current < 700 ) return;
    const { pageY } = e.changedTouches[0];
    if (e.type === 'touchstart') lastTouchY.current = e.changedTouches[0].pageY;
    else if (!lastTouchY.current) return;
    else {
      const direction = lastTouchY.current - pageY > 0 ? 1 : -1;
      setCurrenPage(prev => (prev + direction < 0) ? 0 : (prev + direction > 4) ? 4 : prev + direction);
      lastTs.current = e.timeStamp;
      lastTouchY.current = null;
    }
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
