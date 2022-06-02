import React from "react";
import "./projects.css";
import blogimg from "../../assets/images/dark/pair_programming.svg";
import musicplayerimg from "../../assets/images/dark/audio_player.svg";
import databaseimg from "../../assets/images/dark/server.svg";

export default function Projects() {
  return (
    <div id="Projects">
      <section id="projects-content">
        <div className="content-left">
          <div className="con-text">
            <h3>Music Player</h3>
            <h4>January to May 2022</h4>
            <p>
              For my CPSC 362 - Software Engineering course at CSUF, I
              collaborated in a team of five in building a simple music player.
              We designed a user friendly interface using TKinter GUI and Python
              that allows the user to edit and view their queue music library,
              control the current song, and adjust the application volume. The
              user can upload music to their queue and library from locally
              stored MP3 files.
            </p>
            <br />
            <p>
              I worked on the backend of the application (getting and saving
              file paths, file retrieval, and connecting application pages to
              GUI elements) and helped design the player interface.
            </p>
            <br />
            <a
              className="project-link"
              href="https://github.com/nickayson/Music-Player-CPSC-362"
              target="_blank"
            >
              Source Code
            </a>
          </div>
          <img
            className="con-img"
            src={musicplayerimg}
            alt="shows a person listening to music on a giant phone"
            width="500"
            height="500"
          />
        </div>
      </section>
      <section id="projects-content">
        <div className="content-right">
          <div className="con-text">
            <h3>MERN Stack Blog</h3>
            <h4>January to April 2022</h4>
            <p>
              I developed a personal blog where I (or admin accounts) can create
              and edit posts and users can view the posts by date, category, and
              author. I am planning on using the blog to post about technologies
              I'm learning, projects I'm working on, and other hobbies.
            </p>
            <br />
            <p>
              I used HTML/CSS, MongoDB, Express.js, React.js, and Node.js for
              the website. I also created a REST API to handle requests. The
              blog is complete, now I am working on deploying it.
            </p>
            <br />
            <a
              className="project-link"
              href="https://github.com/ashleythorlin/MERN-Stack-Blog"
              target="_blank"
            >
              Source Code
            </a>
          </div>
          <img
            className="con-img"
            src={blogimg}
            alt="shows a person programming with their colleague"
            width="500"
            height="500"
          />
        </div>
      </section>
      <section id="projects-content">
        <div className="content-left">
          <div className="con-text">
            <h3>University Database Project</h3>
            <h4>November - December 2021</h4>
            <p>
              For my CPSC 332 - File Structures & Databases course at CSUF, I
              led a team of three in building a mock university database. We
              designed the schema and created an ER diagram and relational
              model. The database was implemented on university servers using
              MySQL and MariaDB.
            </p>
            <br />
            <p>
              I designed a user-friendly interface using HTML, CSS, and PHP,
              allowing users to easily access data containing information about
              current courses, past courses, and grade history.
            </p>
            <br />
            <a
              className="project-link"
              href="https://github.com/ashleythorlin/CPSC-332-Database-Project"
              target="_blank"
            >
              Source Code
            </a>
          </div>
          <img
            className="con-img"
            src={databaseimg}
            alt="shows a person looking at a laptop on top of drawers"
            width="500"
            height="500"
          />
        </div>
      </section>
    </div>
  );
}
