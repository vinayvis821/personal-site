import "./pages.css";
import GradPicture from "../assets/about-images/walk.jpg";
import HikePicture from "../assets/about-images/hike.jpg";
import SmilePicture from "../assets/about-images/smile.jpg";

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
            Currently, I am an incoming New Grad SWE at Amazon AWS. Aside from
            programming, I enjoy all things fitness, cooking, binging tv and
            movies, hiking, videogames, and poker.
          </p>
          <p className="second-paragraph">
            The rest of this website is still in incremental development as I
            finish up my summer break and start my job; will be completed soon!
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
