import React, { useEffect, useState, useRef } from 'react';
import { scrollToElement } from '../services/scrollService';
import { observer } from '../services/observerService';
import TaskerrThumbnail from '../images/Taskerr_thumbnail.png';
import NoticeThumbnail from '../images/Notice_thumbnail.png';
import IcryptoThumbnail from '../images/iCrypto_thumbnail.png';
import DsignatureThumbnail from '../images/D-signature_thumbnail.png';
import MyweatherThumbnail from '../images/My-weather_thumbnail.png';
import BalliThumbnail from '../images/Balli_thumbnail.png';
import { isSafari } from '../services/isSafariService';

export const Portfolio = ({ currentPage }) => {
    const [currProject, setCurrProject] = useState(1);
    const elRef = useRef();
    // const navSide = useRef();

    useEffect(() => {
        if (!elRef.current) return
        if (!isSafari) observer.observe(elRef.current);
        else  elRef.current.className += ' in-view';
        // if (elRef.current) observer.observe(elRef.current);
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

                <div className="arrow" onClick={() => setCurrProject(prev => prev === 1 ? 6 : prev - 1)} />

                <div className="projects-wrapper flex justify-center">

                    <div className={`project flex column align-center ${currProject === 1 ? 'active' : ''}`} >
                        <div className="project-content-wrapper" onClick={() => window.open('https://taskerr-v1.herokuapp.com/')}>
                            <img src={TaskerrThumbnail} />
                            <p className="flex column space-around">
                                <i>Manage your projects and organize your tasks with boards, lists, and cards (Trello clone).</i>
                                <span>
                                    <strong>
                                        Technologies used:
                                    </strong>
                                    <br />
                                     React, Redux, Node.js, Express, Socket.io, MongoDB, Sass.
                                </span>
                            </p>
                        </div>
                        <h4 className="label">Taskerr</h4>
                    </div>

                    <div className={`project flex column align-center ${currProject === 2 ? 'active' : ''}`}>
                        <div className="project-content-wrapper" onClick={() => window.open('https://app-notice.herokuapp.com/')}>
                            <img src={NoticeThumbnail} />
                            <p className="flex column space-around">
                                <i>Take notes - Google keep style</i>
                                <span>
                                    <strong>
                                        Technologies used:
                                    </strong>
                                    <br />
                                     React, MobX, Typescript, Express, MongoDB, Sass.
                                </span>
                            </p>

                        </div>
                        <h4 className="label">Notice</h4>
                    </div>

                    <div className={`project flex column align-center ${currProject === 3 ? 'active' : ''}`}>
                        <div className="project-content-wrapper" onClick={() => window.open('https://nextjs-eight-wheat.vercel.app/')}>
                            <img src={IcryptoThumbnail} />
                            <p className="flex column space-around">
                                <i>Cryptocurrencies conversion and market information represented by graphs.</i>
                                <span>
                                    <strong>
                                        Technologies used:
                                    </strong>
                                    <br />
                                     Next.js - React, Sass.
                                </span>
                            </p>

                        </div>
                        <h4 className="label">iCrypto</h4>
                    </div>

                    <div className={`project flex column align-center ${currProject === 4 ? 'active' : ''}`}>
                        <div className="project-content-wrapper" onClick={() => window.open('https://d-signature-app.herokuapp.com/')}>
                            <img src={DsignatureThumbnail} />
                            <p className="flex column space-around">
                                <i>Upload a PDF file and send via WhatsApp for digital signature.</i>
                                <span>
                                    <strong>
                                        Technologies used:
                                    </strong>
                                    <br />
                                    React, Node.js, Express, MongoDB, Sass.
                                </span>
                            </p>

                        </div>
                        <h4 className="label">D-signature</h4>
                    </div>

                    <div className={`project flex column align-center ${currProject === 5 ? 'active' : ''}`}>
                        <div className="project-content-wrapper" onClick={() => window.open('https://myweather-pwa.netlify.app/')}>
                            <img src={MyweatherThumbnail} />
                            <p className="flex column space-around">
                                <i>The current weather in every city in the world and a picture of the place.</i>
                                <span>
                                    <strong>
                                        Technologies used:
                                    </strong>
                                    <br />
                                     React, Sass.
                                </span>
                            </p>

                        </div>
                        <h4 className="label">My Weather</h4>
                    </div>

                    <div className={`project flex column align-center ${currProject === 6 ? 'active' : ''}`}>
                        <div className="project-content-wrapper" onClick={() => window.open('https://balli.netlify.app/')}>
                            <img src={BalliThumbnail} />
                            <p className="flex column space-around">
                                <i>Game: The goal is to hit the target by pulling and releasing the ball.</i>
                                <span>
                                    <strong>
                                        Technologies used:
                                    </strong>
                                    <br />
                                     Vue, Vuex, Sass.
                                </span>
                            </p>

                        </div>
                        <h4 className="label">Balli</h4>
                    </div>

                </div>

                <div className="arrow" onClick={() => setCurrProject(prev => prev === 6 ? 1 : prev + 1)} />

            </div>

        </div>
    )
}