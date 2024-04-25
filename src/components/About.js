import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        My name is Abdulbarik Mohamed im a passionate programmer with a keen interest in
        exploring the world while pursuing my career. my love for programming
        is only rivaled by my desire to travel, making online freelance jobs
        the perfect avenue to blend my two passions seamlessly. With a goal to
        work remotely, i envisions myself immersing in the culture of
        a new country and city each month, allowing myself to broaden my horizons
        professionally and personally. my adventurous spirit and dedication to
        my craft promise an exciting journey ahead, filled with both
        technological innovation and worldly experiences.{" "}
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
