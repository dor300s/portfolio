import React, { useEffect, useRef } from "react";
import { scrollToElement } from "../services/scrollService";
import profilePicture from "../images/Profile.png";
import { observer } from "../services/observerService";
import { isSafari } from "../services/isSafariService";

export const About = ({ currentPage }) => {
  const elRef = useRef();

  useEffect(() => {
    if (!elRef.current) return
    if (!isSafari) observer.observe(elRef.current);
    else elRef.current.className += ' in-view';
    // if (elRef.current) observer.observe(elRef.current);
  }, [elRef.current]);

  useEffect(() => {
    if (currentPage === 3) {
      scrollToElement(elRef.current);
    }
  }, [currentPage]);

  return (
    <div className="about-page-container flex column" ref={elRef}>
      <h3 className="title">ABOUT ME</h3>
      <div className="main-content flex column justify-center align-center">
        <img src={profilePicture} alt="#" />
        <p>{`Junior Full Stack Web Developer, passionate about
             solving challenges, Quick learner and hard-working individual,
             Team player, Excellent analytical, Good communication skills.
             Enthusiastic about developing my knowledge and learning
             new technologies.`}
        </p>
      </div>
    </div>
  );
};
