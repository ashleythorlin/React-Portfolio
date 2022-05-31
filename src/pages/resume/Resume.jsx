import React from "react";
import "./resume.css";

export default function Resume() {
  return (
    <div id="resume">
      <section id="resume-content">
        <div className="con-text">
          <h1>
            my resume...
            <a
              className="fa-icon-link"
              href="media\documents\AshleyThorlin_Resume.docx.pdf"
              target="_blank"
              download
            >
              <i className="fa fa-download fa-xs"></i>
            </a>
          </h1>
        </div>
        <iframe
          id="resume-embed"
          src="https://docs.google.com/document/d/e/2PACX-1vR90liFYOxomkfkAohZLtzRxDa9Zqfx9NXKPurhKz5XpaJZ97C-ACcrQ6sz08T6Bw/pub?embedded=true"
        ></iframe>
      </section>
    </div>
  );
}
