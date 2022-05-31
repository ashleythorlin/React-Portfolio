import React from "react";
import "./experience.css";
import experienceimg from "../../assets/images/dark/designer_girl.svg";

export default function Experience() {
  return (
    <div id="Experience">
      <section id="experience-content">
        <div className="content-right">
          <div className="con-text">
            <h3>Computer Science Tutor</h3>
            <h4>April 2021 to Present</h4>
            <p>
              I am a "Code Sensei" (Computer Science Tutor) at Code Ninjas, a
              center that offers tutoring services and camps for kids ages 5 and
              up. The curriculum covers basic coding and Computer Science
              concepts in various languages (Javascript, C#), while the camps
              offer more game-related activities including Roblox Development,
              Minecraft modding, and Python games.
            </p>
            <br />
            <p>
              Working as a Computer Science Tutor at Code Ninjas has taught me
              to think critically about Computer Science, and develop a deep
              understanding of fundamental concepts. This has helped me build a
              strong foundation of knowledge, not only helping me learn high
              level content in my university coursework, but also helping me
              pick up new languages more easily.
            </p>
          </div>
          <img
            className="con-img"
            src={experienceimg}
            alt="shows a woman sitting at her desk, working at her computer"
            width="500"
            height="500"
          />
        </div>
      </section>

      <section id="experience-content">
        <div className="content-left">
          <div className="con-text">
            <h3>Peer Mentor</h3>
            <h4>January 2022 to Present</h4>
            <p>
              I am a Peer Mentor for CIC | PCUBED at CSU Fullerton, a grant
              funded organization working to increase the transfer and retention
              rates of women studying Computer Science at CSU Fullerton. As a
              Peer Mentor, I meet with students biweekly to offer support,
              insight, and resources regarding courses and degree programs. I
              also co-lead 90 minute workshops at local community colleges to
              share information about the Computer Science programs at CSU
              Fullerton.
            </p>
            <br />
            <p>
              Working as a mentor has improved my leadership and organizational
              skills. Leading my mentees has allowed me to share the knowledge
              I've accumulated as a college student and help them navigate
              issues that I also dealt with in the past. As a mentor, I work
              with my mentees to organize meetings around our schedules and
              other events happening on campus.
            </p>
          </div>
          <img
            className="con-img"
            src={experienceimg}
            alt="shows a woman sitting at her desk, working at her computer"
            width="500"
            height="500"
          />
        </div>
      </section>

      <section id="experience-content">
        <div className="content-right">
          <div className="con-text">
            <h3>Treasurer for CSUF ACM-W</h3>
            <h4>January 2022 to Present</h4>
            <p>
              The Association of Computing Machinery - Women at CSU Fullerton is
              a club supporting women studying Engineering and Computer Science.
              As Treasurer for Spring 2022, I collaborated with the board to
              plan and organize biweekly meetings and events, create flyers to
              advertise the events, and run social, technical, and motivational
              workshops. One of the events I co-led was a Git Workshop, which
              went over Git installation, how distributed version control works,
              and basic git commands.
            </p>
            <br />
            <p>
              This upcoming school year (2022-2023) I will be serving as the
              Vice President and Webmaster of ACM-W. I will work to increase the
              attendance of club members at meetings and plan more technical
              workshops to prepare students for their careers, in order to ease
              their anxieties about the transition from university to industry.
            </p>
          </div>
          <img
            className="con-img"
            src={experienceimg}
            alt="shows a woman sitting at her desk, working at her computer"
            width="500"
            height="500"
          />
        </div>
      </section>
    </div>
  );
}
