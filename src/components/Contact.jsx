import React, { useState, useEffect, useRef } from 'react';
import { scrollToElement } from '../services/scrollService';
import linkedinImage from '../images/linkedin.svg';
import githubImage from '../images/github.svg';
import { observer } from '../services/observerService';


export const Contact = ({ currentPage }) => {
    const [mailForm, setMailForm] = useState({ name: '', email: '', text: '' });
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
        setMailForm(prev => ({ ...prev, [name]: value }));
        console.log(mailForm);
    }
    return (
        <div className="contact-page-container flex column" ref={elRef}>
            <h3 className="title">CONTACT</h3>
            <form onSubmit={(e) => e.preventDefault()} className="flex column align-center" onChange={handleChange}>
                <input type="text" name="name" placeholder="name" />
                <input type="text" name="email" placeholder="email" />
                <div className="text-send-wrapper">
                    <textarea type="text" name="text" placeholder="text" /* cols="40" rows="5" */ />
                    <button type="submit"></button>
                    <div className="send"></div>
                </div>
            </form>
            <div className="social-link-wrapper">
                <img src={linkedinImage} alt="Linkedin" />
                <img src={githubImage} alt="Github" />
            </div>
        </div>
    )
}