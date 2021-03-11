import React from 'react';

export const NavBar = ({ currentPage, setCurrenPage }) => {

    return (
        <div className="nav-container flex align-center space-between">
            <h3>Dor.Dev</h3>
            <ul className="navlink-wrapper flex">
                <li className={currentPage === 1 ? 'active' : ''} onClick={() => setCurrenPage(1)}>SPECIALITIES</li>
                <li className={currentPage === 2 ? 'active' : ''} onClick={() => setCurrenPage(2)}>PORTFOLIO</li>
                <li className={currentPage === 3 ? 'active' : ''} onClick={() => setCurrenPage(3)}>ABOUT ME</li>
                <li className={currentPage === 4 ? 'active' : ''} onClick={() => setCurrenPage(4)}>CONTACT</li>
            </ul>
        </div>
    )
}