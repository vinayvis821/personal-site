import "../header.css";
import "./hamburger.css";
import { useState } from "react";

let links = ["About", "College", "Experience", "Project", "Blog"];
let text = {
  About: [false, "About"],
  College: [false, "College Life"],
  Experience: [false, "Work Experience"],
  Project: [false, "Projects"],
  Blog: [false, "Blog"],
};

function HamburgerPC() {
  const [page, setPage] = useState("About");
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="hamburger-parent">
        {showHamburgerMenu(showMenu, setShowMenu, page, setPage)}
        <div
          className="hamburger hamburger-phone"
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <div className="hamburger-line-pc hamburger-line-long-pc"></div>
          <div className="hamburger-line-pc hamburger-line-medium-pc"></div>
          <div className="hamburger-line-pc hamburger-line-small-pc"></div>
        </div>
      </div>
    </>
  );
}

function showHamburgerMenu(
  showMenu: boolean,
  setShowMenu: any,
  page: string,
  setPage: any
) {
  if (showMenu) {
    return (
      <div className="hamburger-menu-pc">
        <div
          className="pc-x"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <div className="hamburger-line-pc hamburger-line-long-pc-x"></div>
          <div className="hamburger-line-pc hamburger-line-long-pc-x2"></div>
        </div>
        <div className="pc-text">{showPcText(page, setPage)}</div>
      </div>
    );
  }
}

function showPcText(page: string, setPage: any) {
  for (let i = 0; i < links.length; i++) {
    // console.log(text[links[i]]);
  }
  return (
    <>
      <p>About</p>
      <p>College Life</p>
    </>
  );
}

export default HamburgerPC;
