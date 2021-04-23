import React, { useEffect, useRef } from 'react';
import { Welcome } from '../components/Welcome';
import { Specialities } from '../components/Specialities';
import { Portfolio } from '../components/Portfolio';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Dots } from '../components/Dots';
import { scrollToElement } from '../services/scrollService';

export const Main = ({ currentPage }) => {
    const mainEl = useRef();

    useEffect(() => {
        window.addEventListener('resize', setContaierHeight);

        return () => window.removeEventListener('resize', setContaierHeight);
    });

    useEffect(() => {
        if (mainEl.current) {
            mainEl.current.style.height = window.innerHeight + 'px';
        }
    }, [mainEl.current, window.height]);

    const setContaierHeight = () => {
        mainEl.current.style.height = window.innerHeight + 'px';
        scrollToElement();
    };

    return (
        <div ref={mainEl} className="main-page-container">
            <Dots currentPage={currentPage} />
            <Welcome currentPage={currentPage} />
            <Specialities currentPage={currentPage} />
            <Portfolio currentPage={currentPage} />
            <About currentPage={currentPage} />
            <Contact currentPage={currentPage} />
        </div>
    );
};
