import "./header.css";
import Logos from "./subcomponents/logos";
import Hamburger from "./subcomponents/hamburger";
import HamburgerPC from "./subcomponents/hamburger-pc";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-parent">
      <div className="header">
        <div className="container">
          <div className="name">
            <h1>Vinay Viswanathan</h1>
          </div>
          <div className="logos">
            <Logos />
          </div>
        </div>
      </div>
      <div className="logos-phone">
        <Hamburger />
        <Logos />
      </div>
      <div className="hamburger-pc">
        <HamburgerPC />
      </div>
      {/* <Link to="/College">College</Link> */}
    </div>
  );
}

export default Header;
