import React from "react";
import profilePicture from "../images/Profile.png";

export const About = () => {

  return (
    <div className="about-page-container flex column">
      <h3 className="title">ABOUT ME</h3>
      <div className="main-content flex column justify-center align-center">
        <img src={profilePicture} alt="Profile image" />
        <p>{` Ever since I was young I have loved the world of computers
              and technology and constantly continue to enrich my 
              knowledge in the field.
              From the moment I started writing code 
              I was hooked into the world of software development.
              It's provides me continuous challenges that improve
              my skills in creating better quality applications.
              `}
        </p>
      </div>
    </div>
  );
};
