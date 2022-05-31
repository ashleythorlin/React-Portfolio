import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <h1 id="name">ashley thorlin</h1>
      <ul id="nav-links">
        <Link className="nav-link" to="/home">
          <FontAwesomeIcon icon={faHome} /> home
        </Link>
        <Link className="nav-link" to="/about">
          <FontAwesomeIcon icon={faUser} /> about
        </Link>
        <Link className="nav-link" to="/education">
          <FontAwesomeIcon icon={faGraduationCap} /> education
        </Link>
        <Link className="nav-link" to="/experience">
          <FontAwesomeIcon icon={faBriefcase} /> experience
        </Link>
        <Link className="nav-link" to="/projects">
          <FontAwesomeIcon icon={faCode} /> projects
        </Link>
        <Link className="nav-link" to="/current">
          <FontAwesomeIcon icon={faDesktop} /> current
        </Link>
        <Link className="nav-link" to="/resume">
          <FontAwesomeIcon icon={faFile} /> resume
        </Link>
      </ul>
    </div>
  );
}
