import React, { useEffect, useState } from 'react';
import frontendImg from '../images/undraw_responsive_6c8s.svg';
import backendImg from '../images/undraw_server_cluster_jwwq.svg';
import responsiveImg from '../images/undraw_posting_photo_v65l.svg';

export const Specialities = () => {
    const [currItem, setCurrItem] = useState(1);


    return (
        <div className="specialities-page-container flex column" >
            <h3 className="title">SPECIALITIES</h3>

            <div className="content-wrapper flex space-between">
                <div className={`item-wrapper flex column align-center front ${currItem === 1 ? 'active-item' : ''}`}>
                    <img src={frontendImg} />
                    <h4 className="item-title ">Front End</h4>
                    <p>
                        {`Single page application with
                        the latest technologies
                        such as React, Redux, MobX,
                        Modern JavaScript(ES6), OOP, AJAX,
                        HTML5, CSS3, SASS.`}
                    </p>
                </div>

                <div className={`item-wrapper flex column align-center back ${currItem === 2 ? 'active-item' : ''}`}>
                    <img src={backendImg} />
                    <h4 className="item-title ">Back End</h4>
                    <p>
                        {`Server-side programming, API,
                        REST API, User authentication
                        with Node, Express, Session, JWT,
                        Websocket, MongoDB.`}
                    </p>
                </div>

                <div className={`item-wrapper flex column align-center responsive ${currItem === 3 ? 'active-item' : ''}`}>
                    <img src={responsiveImg} />
                    <h4 className="item-title ">Responsive Design</h4>
                    <p>
                        {`Adjusting the application to the
                        device it running on while saving the
                        ???Mobile First??? principle.`}
                    </p>
                </div>
            </div>
            <div className="navigation-buttons-wrapper flex">
                <button onClick={() => setCurrItem(1)}>Front End</button>
                <button onClick={() => setCurrItem(2)}>Back End</button>
                <button onClick={() => setCurrItem(3)}>Responsive</button>
            </div>
        </div>
    );
};
