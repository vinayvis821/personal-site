import "./header.css";
import Logos from "./subcomponents/logos";

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
    </div>
  );
}

export default Header;
