import React from "react";
import Resume from "../Resume-MikeKohlberg.pdf";

const About = () => {
  return (
    <div>
      <div id="aboutMeDesktop">
        <br />
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
          <div className="about-text">
            <p>
            Hello and thank you for visiting my page! I’m Mike Kohlberg — a
              full stack software developer with a bachelor’s in Mechanical
              Engineering and a minor in Computer Science from the University of
              Missouri, Columbia. I also hold a Fundamentals of Engineering
              certificate in Electrical & Computer Engineering. To round out my
              formal education, I completed a software engineering bootcamp with
              General Assembly — a truly transformative experience that I
              recommend to people from all backgrounds. Although my academic and
              professional journey has been diverse, becoming a software
              engineer has always been my goal. I am driven by my passion and aptitude for
              coding and my desire to make a lasting impact. I am comfortable
              working with many different types of people in a wide range of
              settings. I look forward to tackling your toughest bugs and
              bringing your wildest ideas to life. 
            </p>
            <br></br>
            <br></br>
            <div className="links-container">
              <a href="https://linkedin.com/in/michaelkohlberg">LinkedIn</a>
              <span> | </span>
              <a href="https://github.com/mgkdn9">Github</a>
              <span> | </span>
              <a href={Resume} download>
                Resume
              </a>
            </div>
          </div>
          <div className="about-img"></div>
        </div>
      </div>
      <div id="aboutMeMobile">
        <br />
        <h2 className="section-title">About Me</h2>
        <div className="about-img"></div>
        <div className="about-container">
          <div className="about-text">
            <p>
              Hello and thank you for visiting my page! I’m Mike Kohlberg — a
              full stack software developer with a bachelor’s in Mechanical
              Engineering and a minor in Computer Science from the University of
              Missouri, Columbia. I also hold a Fundamentals of Engineering
              certificate in Electrical & Computer Engineering. To round out my
              formal education, I completed a software engineering bootcamp with
              General Assembly — a truly transformative experience that I
              recommend to people from all backgrounds. Although my academic and
              professional journey has been diverse, becoming a software
              engineer has always been my goal. I am driven by my passion and aptitude for
              coding and my desire to make a lasting impact. I am comfortable
              working with many different types of people in a wide range of
              settings. I look forward to tackling your toughest bugs and
              bringing your wildest ideas to life. 
            </p>
            <br></br>
            <br></br>
            <div className="links-container">
              <a href="https://linkedin.com/in/michaelkohlberg">LinkedIn</a>
              <span> | </span>
              <a href="https://github.com/mgkdn9">Github</a>
              <span> | </span>
              <a href={Resume} download>
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
