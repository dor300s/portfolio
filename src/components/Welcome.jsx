import React, { useEffect, useRef } from 'react';
import HelloImg from '../images/undraw_Hello_qnas.svg';
import { observer } from '../services/observerService';
import { scrollToElement } from '../services/scrollService';

export const Welcome = ({ currentPage }) => {
    const elRef = useRef();

    useEffect(() => {
        if (elRef.current) observer.observe(elRef.current);
    }, [elRef.current])

    useEffect(() => {
        if (currentPage === 0) {
            scrollToElement(elRef.current);
        }
    }, [currentPage])



    return (
        <div className="welcome-page-container" ref={elRef}>
            <div className="content-wrapper flex align-center space-between">
                <div className="greet">
                    <h4>Hi, I'm <span className="name">Dor Ben Itzhak</span></h4>
                    <h3>Full Stack Developer</h3>
                </div>
                <img src={HelloImg} />
            </div>
            {/* <div className="circle c1"/>
            <div className="circle c2"/>
            <div className="circle c3"/>
            <div className="circle c4"/> */}
        </div>
    )
}