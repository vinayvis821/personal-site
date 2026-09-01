import "./pages.css";
import React, { useEffect, useState } from "react";
import GradPicture from "../assets/about-images/walk.jpg";
import HikePicture from "../assets/about-images/hike.jpg";
import SmilePicture from "../assets/about-images/smile.jpg";

const displayVerticalBar = (): React.JSX.Element => {
  return <div className="vertical-bar"></div>;
};

function About() {
  const [barVisible, setBarVisible] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBarVisible((barVisible) => !barVisible);
    }, 500);

    return () => clearTimeout(timeout);
  }, [barVisible]);

  return (
    <div className="page">
      <div className="about">
        <div className="title-parent">
          <div className="title">
            {barVisible && displayVerticalBar()}
            <h2 contentEditable="true">About Me</h2>
          </div>
        </div>
        <div className="content">
          <p>
            Hi, My name is Vinay! I graduated with a computer science degree at
            Washington University in St. Louis with a minor in Human Computer
            Interaction 💻 in 2024.
          </p>
          <p className="second-paragraph">
            Currently, I am a Software Engineer at Twitch
            working out of Seattle on the Memberships team.
          </p>
          <p className="second-paragraph">
            Aside from programming, I enjoy all things fitness (weightlifting,
            boxing, running), cooking, playing the guitar, binging tv and
            movies, and videogames
          </p>
          <p className="second-paragraph">
            I also love being outdoors and enjoy skiing, hiking, and
            paddleboarding when the weather is nice.
          </p>
          <p className="second-paragraph">
            In my free time I'm studying to be a Certified Personal Trainer to
            help everyone achieve their fitness goals
          </p>
          <p className="second-paragraph">
            I'm also a professional photographer/videographer in my spare time.
            Check out my work <a href="#">here</a> (under construction)
          </p>
          <p className="second-paragraph">
            Feel free to reach out to me at visvinay821 (at) gmail (dot) com
          </p>
          <div className="about-images">
            <img id="pic1" src={GradPicture} alt="Graduation picture" />
            <img id="pic2" src={SmilePicture} alt="Smiling picture" />
            <img id="pic3" src={HikePicture} alt="Hiking picture" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
