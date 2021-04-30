import React from 'react';
import HelloImg from '../images/undraw_Hello_qnas.svg';

export const Welcome = () => {

    return (
        <div className="welcome-page-container" >
            <div className="content-wrapper flex column align-center">
                <div className="greet">
                    <h4>Hi, I'm <span className="name">Dor Ben Itzhak</span></h4>
                    <h3>Full Stack Developer</h3>
                </div>
                <img src={HelloImg} />
            </div>
        </div>
    )
}