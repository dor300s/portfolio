import React, { useEffect, useRef, cloneElement } from 'react';
import { Welcome } from '../components/Welcome';
import { Specialities } from '../components/Specialities';
import { Portfolio } from '../components/Portfolio';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Dots } from '../components/Dots';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { scrollToElement } from '../services/scrollService';
const duration = 300;
const PAGES = [<Welcome />, <Specialities />, <Portfolio />, <About />, <Contact />];

export const Main = ({ currentPage, lastPage }) => {
    const mainEl = useRef();



    useEffect(() => {
        window.addEventListener('resize', setContaierHeight);

        return () => window.removeEventListener('resize', setContaierHeight);
    }, []);

    useEffect(() => {
        if (mainEl.current) {
            mainEl.current.style.height = window.innerHeight + 'px';
        }
    }, [mainEl.current, window.height]);

    const setContaierHeight = () => {
        mainEl.current.style.height = window.innerHeight + 'px';
    };


    return (
        <div ref={mainEl} className="main-page-container">
            <Dots currentPage={currentPage} />
            {PAGES.map((page, idx) => {
                return (
                    <CSSTransition in={currentPage === idx} timeout={200} classNames="fade" key={idx}>
                        <div className="transition-page-container" style={{ '--direction': currentPage > lastPage ? '20vh' : '-20vh' }}>
                            {/* {currentPage === idx ? page : <></>} */}
                            {/* {currentPage === idx ? cloneElement(page, { currentPage }) : <></>} */}
                            {/* {cloneElement(page, { currentPage })} */}
                            {page}
                        </div>
                    </CSSTransition>
                )
            })}
        </div>
    )
}