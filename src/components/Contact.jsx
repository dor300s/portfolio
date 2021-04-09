import React, { useState, useEffect, useRef } from 'react';
import { scrollToElement } from '../services/scrollService';
import linkedinImage from '../images/linkedin.svg';
import githubImage from '../images/github.svg';
import { observer } from '../services/observerService';


export const Contact = ({ currentPage }) => {
    const [mailMessage, setMailMessage] = useState({ subject: '', body: '' });
    const elRef = useRef();

    useEffect(() => {
        if (elRef.current) observer.observe(elRef.current);
    }, [elRef.current])

    useEffect(() => {
        if (currentPage === 4) {
            scrollToElement(elRef.current);
        };
    }, [currentPage])

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setMailMessage(prev => ({ ...prev, [name]: value }));
        console.log(mailMessage);
    }

    const handleMail = () => {
        window.open(`mailto:dor300s@gmail.com?subject=${mailMessage.subject}&body=${mailMessage.body}`);
    }

    return (
        <div className="contact-page-container flex column space-between" ref={elRef}>
            <h3 className="title">CONTACT</h3>
            <form onSubmit={(e) => e.preventDefault()} className="flex column align-center" onChange={handleChange}>
                <input type="text" name="subject" placeholder="subject" />
                <div className="text-send-wrapper">
                    <textarea type="text" name="body" placeholder="body" /* cols="40" rows="5" */ />
                    <div className="send" onClick={handleMail} />
                </div>
            </form>
            <div className="social-link-wrapper">
                <img src={linkedinImage} alt="Linkedin" onClick={() => window.open('https://www.linkedin.com/in/dor-ben-itzhak/')} />
                <img src={githubImage} alt="Github" onClick={() => window.open('https://github.com/dor300s')} />
            </div>
        </div>
    )
}