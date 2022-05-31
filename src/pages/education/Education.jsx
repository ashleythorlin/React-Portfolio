import React from "react";
import "./education.css";
import educationimg from "../../assets/images/dark/education.svg";

export default function Education() {
  return (
    <div id="education">
      <section id="education-content">
        <div className="content-left">
          <div className="con-text">
            <h1>my education...</h1>
            <p>
              I am a rising senior (expected May 2023) at California State
              University, Fullerton pursuing a B.S. in Computer Science.
            </p>
            <br />
            <p>
              Some of my completed coursework includes Software Engineering,
              Algorithm Engineering, Operating Systems, Computer Security, File
              Structures & Databases, and Data Structures.
            </p>
            <br />
            <p>
              Software Engineering taught me about the software development life
              cycle and the different methodologies behind software development.
              The larger scale projects I have completed in my Software
              Engineering and Databases courses not only gave me the freedom to
              channel my passion and creativity into my coursework, but also
              taught me essential leadership and collaboration skills. Courses
              like Data Structures and Algorithm Engineering solidified my
              foundational knowledge, teaching me important design patterns and
              how to solve and analyze complex problems.
            </p>
            <br />
            <p>
              Outside of my university, I have completed online courses to
              further grow my skillset, mainly for full-stack development.
            </p>
          </div>
          <img
            className="con-img"
            src={educationimg}
            alt="shows a woman standing on giant books, holding a graduation cap"
            width="500"
            height="500"
          />
        </div>
      </section>
    </div>
  );
}
