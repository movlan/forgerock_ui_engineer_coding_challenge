import React from "react";
import { Link } from "react-router-dom";

import "./SideNav.scss";

import {
  AiFillHome,
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillMail,
} from "react-icons/ai";

function SideNav(props) {
  const { open, width, toggleNav, data } = props;

  const handleClick = (e) => {
    e.preventDefault();
    toggleNav();
  };

  return (
    <nav className="SideNav" style={{ width: width }}>
      <ul>
        <li>
          <Link to="" className="toggle" onClick={handleClick}>
            {open ? (
              <AiFillCaretLeft style={{ float: "right" }} />
            ) : (
              <AiFillCaretRight />
            )}
          </Link>
        </li>
        <li>
          <Link to="/">
            <AiFillHome />
            {/* we do this to hide names of nav links while closed */}
            <span style={open ? { display: "inline" } : { display: "none" }}>
              {data.home.name}
            </span>
          </Link>
        </li>
        <li>
          <Link to="/linkedin">
            <AiFillLinkedin />
            <span style={open ? { display: "inline" } : { display: "none" }}>
              {data.linkedin.name}
            </span>
          </Link>
        </li>
        <li>
          <Link to="/github">
            <AiFillGithub />
            <span style={open ? { display: "inline" } : { display: "none" }}>
              {data.github.name}
            </span>
          </Link>
        </li>
        <li>
          <Link to="/twitter">
            <AiFillTwitterCircle />
            <span style={open ? { display: "inline" } : { display: "none" }}>
              {data.twitter.name}
            </span>
          </Link>
        </li>
        <li>
          <Link to="/email">
            <AiFillMail />
            <span style={open ? { display: "inline" } : { display: "none" }}>
              {data.email.name}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
