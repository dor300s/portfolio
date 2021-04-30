import React from "react";
import profilePicture from "../images/Profile.png";

export const About = () => {

  return (
    <div className="about-page-container flex column">
      <h3 className="title">ABOUT ME</h3>
      <div className="main-content flex column justify-center align-center">
        <img src={profilePicture} alt="#" />
        <p>{`Full Stack Web Developer, passionate about
             solving challenges, Quick learner and hard-working individual,
             Team player, Excellent analytical, Good communication skills.
             Enthusiastic about developing my knowledge and learning
             new technologies.`}
        </p>
      </div>
    </div>
  );
};
