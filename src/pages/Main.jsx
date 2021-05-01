import React, { useEffect, useRef } from 'react';
import { Welcome } from '../components/Welcome';
import { Specialities } from '../components/Specialities';
import { Portfolio } from '../components/Portfolio';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Dots } from '../components/Dots';
import { CSSTransition } from 'react-transition-group';

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
                    <CSSTransition key={idx} in={currentPage === idx} timeout={300} classNames="fade" mountOnEnter >
                        <div
                            className="transition-page-container"
                            style={{ '--direction': currentPage > lastPage ? '20vh' : '-20vh' }}
                        >
                            {page}
                        </div>
                    </CSSTransition>
                )
            })}
        </div>
    )
}