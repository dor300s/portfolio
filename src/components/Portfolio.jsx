import React, { useEffect, useState, useRef } from 'react';
import { scrollToElement } from '../services/scrollService';
import { observer } from '../services/observerService';
import TaskerrThumbnail from '../images/Taskerr_thumbnail.png';
import NoticeThumbnail from '../images/Notice_thumbnail.png';
import IcryptoThumbnail from '../images/iCrypto_thumbnail.png';

export const Portfolio = ({ currentPage }) => {
    const [currProject, setCurrProject] = useState(1);
    const elRef = useRef();
    // const navSide = useRef();

    useEffect(() => {
        if (elRef.current) observer.observe(elRef.current);
    }, [elRef.current])

    useEffect(() => {
        if (currentPage === 2) {
            scrollToElement(elRef.current);
        };
    }, [currentPage])

    return (
        <div className="portfolio-page-container flex column" ref={elRef}>
            <h3 className="title">PORTFOLIO</h3>
            <div className="projects-container flex align-center">

                <div className="arrow" onClick={() => setCurrProject(prev => prev === 1 ? 3 : prev - 1)} />

                <div className="projects-wrapper flex justify-center">

                    <div className={`project flex column align-center ${currProject === 1 ? 'active' : ''}`} >
                        <img src={TaskerrThumbnail} onClick={() => window.open('https://taskerr-v1.herokuapp.com/')} />
                        <h4 className="label">Taskerr</h4>
                    </div>

                    <div className={`project flex column align-center ${currProject === 2 ? 'active' : ''}`}>
                        <img src={NoticeThumbnail} onClick={() => window.open('https://app-notice.herokuapp.com/')} />
                        <h4 className="label">Notice</h4>
                    </div>

                    <div className={`project flex column align-center ${currProject === 3 ? 'active' : ''}`}>
                        <img src={IcryptoThumbnail} onClick={() => window.open('https://nextjs-eight-wheat.vercel.app/')} />
                        <h4 className="label">iCrypto</h4>
                    </div>

                </div>

                <div className="arrow" onClick={() => setCurrProject(prev => prev === 3 ? 1 : prev + 1)} />

            </div>

        </div>
    )
}