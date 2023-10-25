import "../header.css";
import "./hamburger.css";

function Hamburger() {
  return (
    <>
      <div
        className="hamburger hamburger-phone"
        onClick={() => {
          console.log("test");
        }}
      >
        <div className="hamburger-line hamburger-line-long"></div>
        <div className="hamburger-line hamburger-line-medium"></div>
        <div className="hamburger-line hamburger-line-small"></div>
      </div>
    </>
  );
}

export default Hamburger;
