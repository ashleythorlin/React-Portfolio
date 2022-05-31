import React from "react";
import "./about.css";
import aboutimg from "../../assets/images/dark/working_late.svg";
import passionimg from "../../assets/images/dark/dreamer.svg";
import contactimg from "../../assets/images/dark/social_ideas.svg";

export default function About() {
  return (
    <div id="about">
      <section id="about-content">
        <div className="content-right">
          <div className="con-text">
            <h1>a little about me...</h1>
            <p>
              I'm a third year Computer Science student looking for a summer
              internship to build my skills and learn more about different
              fields in the tech industry.
            </p>
          </div>
          <img
            className="con-img"
            src={aboutimg}
            alt="shows a woman working on her laptop at night"
            width="500"
            height="500"
          />
        </div>
      </section>
      <section id="passions-content">
        <div className="content-left">
          <div className="con-text">
            <h1>my passions...</h1>
            <p>
              I have always been drawn to technology since I was a kid, all
              stemming from my passion for video games. I started playing World
              of Warcraft when I was 9 years old, and since then my love (and
              library) of video games has only grown. Lately, I have been
              playing a variety of indie co-op games along with Valorant. While
              I do spend most of my free time playing or chatting online with
              friends, I also enjoy being outdoors. Whether I am camping,
              hiking, or going to the beach, I find that getting some fresh air
              helps me relax and reset to stay productive. :)
            </p>
          </div>
          <img
            className="con-img"
            src={passionimg}
            alt="shows a woman sitting outdoors"
            width="500"
            height="500"
          />
        </div>
      </section>
      <section id="contact-content">
        <div className="content-right">
          <div className="con-text">
            <h1>connect with me!</h1>
            <div id="icons">
              <a
                className="fa-icon-link"
                href="https://www.instagram.com/ashley_thorlin/"
                target="_blank"
              >
                <i className="fa fa-instagram fa-2x"></i>
              </a>
              <a
                className="fa-icon-link"
                href="https://www.linkedin.com/in/ashley-thorlin"
                target="_blank"
              >
                <i className="fa fa-linkedin fa-2x"></i>
              </a>
              <a
                className="fa-icon-link"
                href="https://www.github.com/ashleythorlin"
                target="_blank"
              >
                <i className="fa fa-github fa-2x"></i>
              </a>
            </div>
          </div>
          <img
            className="con-img"
            src={contactimg}
            alt="shows a woman standing next to hovering instagram, facebook, and twitter logos"
            width="500"
            height="500"
          />
        </div>
      </section>
    </div>
  );
}
