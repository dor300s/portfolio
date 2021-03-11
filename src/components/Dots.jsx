import React from 'react';

export const Dots = ({ currentPage }) => {
    return (
        <div className="dots-container">
            <div className={`dot ${currentPage === 0 ? 'active' : ''}`} />
            <div className={`dot ${currentPage === 1 ? 'active' : ''}`} />
            <div className={`dot ${currentPage === 2 ? 'active' : ''}`} />
            <div className={`dot ${currentPage === 3 ? 'active' : ''}`} />
            <div className={`dot ${currentPage === 4 ? 'active' : ''}`} />
        </div>
    )
}