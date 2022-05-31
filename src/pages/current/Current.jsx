import React from "react";
import "./current.css";
import currentimg from "../../assets/images/dark/knowledge.svg";

export default function Current() {
  return (
    <div id="current">
      <section id="current-content">
        <div className="content-right">
          <div className="con-text">
            <h1>what i'm working on...</h1>
            <p>
              I am balancing my university courses and online courses to learn
              and improve Web Development skills. I am working on a few school
              and passion projects, which you can see here:
              <a
                className="project-link"
                href="https://github.com/ashleythorlin"
                target="_blank"
              >
                Github
              </a>
            </p>
          </div>
          <img
            className="con-img"
            src={currentimg}
            alt="shows a woman looking at a large whiteboard"
            width="500"
            height="500"
          />
        </div>
      </section>

      <section id="current-content">
        <div className="content-left">
          <div className="con-text">
            <h3>Programmer's Calculator</h3>
            <p>
              I am developing a "Programmer's Calculator" Chrome extension,
              which is a scientific calculator that includes utilities that a
              programmer or Computer Science student may find helpful. Some of
              these utilities include unit conversions for CSS, numeral system
              conversions, bit operations, as well as string encoding/decoding.
              I am creating the application using HTML, CSS, and JavaScript. So
              far, I have designed the interface of the application using Figma.
              Currently, I am building the interface using HTML/CSS.
            </p>
            <br />
            <a
              className="project-link"
              href="https://github.com/ashleythorlin/Programmers-Calc"
              target="_blank"
            >
              Link to Repo
            </a>
          </div>
          <img
            className="con-img"
            src={currentimg}
            alt="shows a woman looking at a large whiteboard"
            width="500"
            height="500"
          />
        </div>
      </section>
    </div>
  );
}
