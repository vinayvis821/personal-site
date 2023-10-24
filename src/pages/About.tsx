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
            Hi! My name is Vinay. I am currently a rising senior studying
            computer science at Washington University in St. Louis Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Fusce semper quam sit
            amet odio auctor, non bibendum leo ullamcorper. Vestibulum fermentum
            pretium diam. Curabitur non gravida risus. Morbi aliquet, nibh non
            porttitor tristique, nibh nisi dignissim turpis, ultricies accumsan
            purus nibh sit amet dolor. Ut pretium neque a condimentum tincidunt.
            Donec egestas dui sed quam feugiat ullamcorper. Cras sed maximus
            odio, sit amet faucibus lectus. Proin nec arcu quis enim
            sollicitudin ultricies nec ullamcorper elit.
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
