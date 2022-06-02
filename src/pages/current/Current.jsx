import React from "react";
import "./current.css";
import currentimg from "../../assets/images/dark/knowledge.svg";
import rosalindimg from "../../assets/images/dark/science_study.svg";
import videogameimg from "../../assets/images/dark/video_game_night.svg";

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
            <h3>2D Platformer Game</h3>
            <p>
              I am working in a group of 5 to create a 2D puzzle platformer
              game. Our game is about a small grove spirit whose forest home was
              cut down by loggers. The spirit finds a sticky hand toy in a bag
              of trash on the ground, and from then on uses the sticky hand as a
              tool to maneuver through the world. The player follows the spirit
              on a journey to find their loved ones displaced by the logging,
              and trying to figure out a way to end the logging operation and
              protect their forests.
            </p>
            <br />
            <p>
              We are currently in the development stage of our game. I work
              mainly on development, sound, and game design, using Unity to
              build our game and GarageBand to compose the soundtracks.
              Currently, I am working on the "sticky hand" physics of the
              player, which will work similar to a grappling hook and allow the
              player to swing from platform to platform.
            </p>
          </div>
          <img
            className="con-img"
            src={videogameimg}
            alt="shows a woman looking at a large whiteboard"
            width="500"
            height="500"
          />
        </div>
      </section>
      <section id="current-content">
        <div className="content-right">
          <div className="con-text">
            <h3>Rosalind Problems</h3>
            <p>
              I am working through the Rosalind bioinformatics problems to
              practice coding with Python and apply my skills to one of my
              passions: science. The problems can be found at{" "}
              <a
                className="weblink"
                href="https://rosalind.info/problems/tree-view/"
                target="_blank"
              >
                rosalind.info
              </a>
            </p>
            <br />
            <a
              className="project-link"
              href="https://github.com/ashleythorlin/Rosalind-Problems"
              target="_blank"
            >
              Source Code
            </a>
          </div>
          <img
            className="con-img"
            src={rosalindimg}
            alt="shows a person dropping objects into a giant beaker with fluid"
            width="500"
            height="500"
          />
        </div>
      </section>
    </div>
  );
}
