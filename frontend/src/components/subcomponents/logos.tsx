import "../header.css";
import GithubLogo from "../../assets/github.svg";
import TwitterLogo from "../../assets/twitter.svg";
import LinkedInLogo from "../../assets/linkedin.png";

function Logos() {
  const imageSize: string = "20px";

  return (
    <>
      <a href="https://github.com/vinayvis821" target="_blank">
        <img
          src={GithubLogo}
          className="logo"
          alt="Github logo"
          width={imageSize}
          height={imageSize}
        />
      </a>
      <a href="https://twitter.com/VinayV821" target="_blank">
        <img
          src={TwitterLogo}
          className="logo"
          alt="Twitter logo"
          width={imageSize}
          height={imageSize}
        />
      </a>
      <a href="https://www.linkedin.com/in/vinay-viswanathan/" target="_blank">
        <img
          src={LinkedInLogo}
          className="logo"
          alt="LinkedIn logo"
          width={imageSize}
          height={imageSize}
        />
      </a>
    </>
  );
}

export default Logos;
