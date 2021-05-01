import React, { useState } from 'react';
import linkedinImage from '../images/linkedin.svg';
import githubImage from '../images/github.svg';
import whatsappImage from '../images/whatsapp.svg';

export const Contact = () => {
    const [mailMessage, setMailMessage] = useState({ subject: '', body: '' });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setMailMessage(prev => ({ ...prev, [name]: value }));
        console.log(mailMessage);
    }

    const handleMail = () => {
        window.open(`mailto:dor300s@gmail.com?subject=${mailMessage.subject}&body=${mailMessage.body}`);
    }

    return (
        <div className="contact-page-container flex column space-between" >
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
                <img src={whatsappImage} alt="Whatsapp" onClick={() => window.open('https://wa.me/972526716633')} />
            </div>
        </div>
    )
}