import React from "react";
import "./home.css";
import homeimg from "../../assets/images/dark/proud_coder.svg";


export default function Home() {
    return (
        <section id="home-content">
          <div className="content-right">
            <div className="con-text">
              <h1>hi there!</h1>
              <h1>i'm ashley.</h1>
            </div>
            <img
              className="con-img"
              src={homeimg}
              alt="shows a woman at her computer waving"
              width="500"
              height="500"
            />
          </div>
        </section>
    );
}