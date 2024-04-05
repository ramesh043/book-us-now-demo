import React from "react";
import "./home.css";
import EventCarousel from "./EventCarousel";
import UpComingEvents from "./UpComingEvents";
import githubImg from "../images/github.png";
// import { animate__zoomInDown } from "react-awesome-reveal";
function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <div className="">
            <h1 class="animate__animated  animate__zoomInDown">
              discovering Existing Events Happening
              <br /> Near You -Stay Tuned For Updates
            </h1>
          </div>
          <div className="hero-para animate__animated animate__zoomInUp">
            <p style={{ textAlign: "center" }}>
              loremhuwygefhudjiFAGUIFDJIOavbhjcnVGIBBHJ
              loremhuwygefhudjiFAGUIFDJIOavbhjcnVGIBBHJ
            </p>
          </div>
        </div>
      </div>
      <div className="eventCarusel">
        <div className="head-section">
          <h4>Recomendation Shows &rarr;</h4>
          <a href="/">see all</a>
        </div>
        <EventCarousel />
      </div>

      <h4
        style={{
          margin: "0 auto",
          maxWidth: "1200px",
          paddingBottom: "5px",
        }}
      >
        Upcoming Events &rarr;
      </h4>

      <div className="upcoming__events">
        <UpComingEvents />
        <br />
        <UpComingEvents />
      </div>
      <div>
        <footer>
          <a
            href="https://github.com/ramesh043"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubImg} alt="github" width={20} />
          </a>
          <p>💛Created By Ramesh</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
