import React, { useState, useRef, useEffect } from 'react';
import { MenuButton } from './MenuButton';
import { Logo } from './Logo';

export const NavBar = ({ currentPage, setCurrenPage, setLastPage }) => {
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

    const onNavClick = ({ target }) => {
        const { value } = target;
        setCurrenPage(prev => {
            setLastPage(prev);
            return value;
        })
    }

    return (
        <>
            <MenuButton isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
            <div className="nav-container flex align-center space-between">
                {/* <h3>{'< Dor.Dev />'}</h3> */}
                <Logo />
                <ul ref={elNav} className={`navlink-wrapper flex column align-center ${isNavOpen ? 'active' : ''}`}>
                    <li className={currentPage === 1 ? 'active' : ''} value={1} onClick={onNavClick}>SPECIALITIES</li>
                    <li className={currentPage === 2 ? 'active' : ''} value={2} onClick={onNavClick}>PORTFOLIO</li>
                    <li className={currentPage === 3 ? 'active' : ''} value={3} onClick={onNavClick}>ABOUT ME</li>
                    <li className={currentPage === 4 ? 'active' : ''} value={4} onClick={onNavClick}>CONTACT</li>
                </ul>
            </div>
        </>
    )
}