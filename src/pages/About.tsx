import "./pages.css";
import GradPicture from "../assets/about-images/walk.jpg";
import HikePicture from "../assets/about-images/hike.jpg";
import BeachPicture from "../assets/about-images/beach.jpg";

function About() {
  return (
    <div className="page">
      <div className="about">
        <div className="title-parent">
          <div className="title">
            <div className="vertical-bar"></div>
            <h2 contentEditable="true">About Me</h2>
          </div>
        </div>
        <div className="content">
          <p>
            Hi! My name is Vinay. I recently graduated with a computer science
            degree at Washington University in St. Louis with a minor in Human
            Computer Interaction 💻.
          </p>
          <p className="second-paragraph">
            This website is still in incremental development as I finish up my
            summer break and start my job. Will be completed soon!
          </p>
          <div className="about-images">
            <img id="sky" src={GradPicture} alt="skydiving picture" />
            <img id="beach" src={BeachPicture} alt="beach picture" />
            <img id="crane" src={HikePicture} alt="mountain pose picture" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
