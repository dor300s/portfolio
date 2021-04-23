import React, { useState, useRef, useEffect } from 'react';
import { MenuButton } from './MenuButton';
import { Logo } from './Logo';

export const NavBar = ({ currentPage, setCurrenPage }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const elNav = useRef();
    const currNavState = useRef();

    useEffect(() => {
        window.addEventListener('click', handleClick);

        return (() => window.removeEventListener('click', handleClick));
    }, [])

    useEffect(() => {
        currNavState.current = isNavOpen;
    }, [isNavOpen])

    const handleClick = ({ target }) => {
        if (!currNavState.current) return;
        target !== elNav.current && setIsNavOpen(false);
    }

    return (
        <>
            <MenuButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
            <div className="nav-container flex align-center space-between">
                {/* <h3>{'< Dor.Dev />'}</h3> */}
                <Logo />
                <ul ref={elNav} className={`navlink-wrapper flex column align-center ${isNavOpen ? 'active' : ''}`}>
                    <li className={currentPage === 1 ? 'active' : ''} onClick={() => setCurrenPage(1)}>SPECIALITIES</li>
                    <li className={currentPage === 2 ? 'active' : ''} onClick={() => setCurrenPage(2)}>PORTFOLIO</li>
                    <li className={currentPage === 3 ? 'active' : ''} onClick={() => setCurrenPage(3)}>ABOUT ME</li>
                    <li className={currentPage === 4 ? 'active' : ''} onClick={() => setCurrenPage(4)}>CONTACT</li>
                </ul>
            </div>
        </>
    )
}