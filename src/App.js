import React, { useEffect, useRef, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Main } from "./pages/Main";

const SUSPEND_TIME_MILISECONDS = 750;

export const App = () => {
  const [currentPage, setCurrenPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const lastTs = useRef(0);
  const lastTouchY = useRef(null);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleTouch);
    window.addEventListener('touchmove', handleTouch);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, []);

  const handleScroll = (e) => {
    if (e.timeStamp - lastTs.current < SUSPEND_TIME_MILISECONDS) return;
    const direction = e.deltaY > 0 ? 1 : -1;
    setCurrenPage((prev) => {
      setLastPage(prev);
      return prev + direction < 0 ? 0 : prev + direction > 4 ? 4 : prev + direction;
    }
    );
    lastTs.current = e.timeStamp;
  };

  const handleTouch = (e) => {
    if (e.changedTouches.length !== 1 || e.timeStamp - lastTs.current < SUSPEND_TIME_MILISECONDS) return;
    const { pageY } = e.changedTouches[0];
    if (e.type === "touchstart") lastTouchY.current = e.changedTouches[0].pageY;
    else if (!lastTouchY.current) return;
    else {
      const direction = lastTouchY.current - pageY > 0 ? 1 : -1;
      setCurrenPage((prev) => {
        setLastPage(prev);
        return prev + direction < 0 ? 0 : prev + direction > 4 ? 4 : prev + direction;
      }
      );
      lastTs.current = e.timeStamp;
      lastTouchY.current = null;
    }
  };

  return (
    <div className="app main-container">
      <div className="app-content">
        <NavBar currentPage={currentPage} setCurrenPage={setCurrenPage} setLastPage={setLastPage}/>
        <Main currentPage={currentPage} lastPage={lastPage} />
      </div>
    </div>
  );
};
