import React from "react";
import "./HomeSection.css";
import { Button } from "./Button";

function HomeSection() {
  return (
    <div className="HomeSection-container">
      <video src="/Videos/Background-video.mp4" autoPlay loop muted></video>
      <h1>Get your Project Started</h1>
      <p> Schedule an estimate or book a project</p>
      <div classame="HomeSection-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
        >
          Sign Up
        </Button>
        {"   "}
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
        >
          Schedule Quote
        </Button>
        {"   "}
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
        >
          Schedule Project
        </Button>
      </div>
    </div>
  );
}

export default HomeSection;
