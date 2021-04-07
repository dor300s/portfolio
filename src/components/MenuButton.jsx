import React from 'react';

export const MenuButton = (props) => {


    return (
        <div className={`menu-button flex column ${props.isNavOpen ? 'nav-open' : ''}`} onClick={() => props.setIsNavOpen(true)}>
            <div className="line1" />
            <div className="line2" />
        </div>
    )
}