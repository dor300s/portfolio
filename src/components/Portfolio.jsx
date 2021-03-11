import React, { useEffect, useRef } from 'react';
import { scrollToElement } from '../services/scrollService';
import { observer } from '../services/observerService';
import TaskerrThumbnail from '../images/Taskerr_thumbnail.png';
import NoticeThumbnail from '../images/Notice_thumbnail.png';
import IcryptoThumbnail from '../images/iCrypto_thumbnail.png';

export const Portfolio = ({ currentPage }) => {
    const elRef = useRef();

    useEffect(() => {
        if (elRef.current) observer.observe(elRef.current);
    }, [elRef.current])

    useEffect(() => {
        if (currentPage === 2) {
            scrollToElement(elRef.current);
        };
    }, [currentPage])

    return (
        <div className="portfolio-page-container flex column justify-center" ref={elRef}>
            <h3 className="title">PORTFOLIO</h3>
            <div className="projects-wrapper flex space-between">

                <div className="project">
                    <img src={TaskerrThumbnail}/>
                    <h4 className="label">Taskerr</h4>
                </div>

                <div className="project">
                    <img src={NoticeThumbnail}/>
                    <h4 className="label">Notice</h4>
                </div>

                <div className="project">
                    <img src={IcryptoThumbnail}/>
                    <h4 className="label">iCrypto</h4>
                </div>

            </div>

        </div>
    )
}