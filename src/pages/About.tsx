import "./pages.css";
import BeachPicture from "../assets/about-images/beach.png";
import CranePicture from "../assets/about-images/crane.png";
import SkyPicture from "../assets/about-images/skydive.png";

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
            Hi! My name is Vinay. I am currently a senior studying computer
            science at Washington University in St. Louis with a minor in Human
            Computer Interaction 💻.
          </p>
          <p className="second-paragraph">
            This website is still in incremental development as I work to finish
            up my last semester and will be completed soon!
          </p>
          <div className="about-images">
            <img id="sky" src={SkyPicture} alt="skydiving picture" />
            <img id="beach" src={BeachPicture} alt="beach picture" />
            <img id="crane" src={CranePicture} alt="mountain pose picture" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
