import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">JAINIL K. RANA </span>
            from <span className="purple"> Gujarat, India.</span>
            <br /> I am a Grad student pursuing a MEng in Computer Engineering
            (uOttawa) with concentration in AI.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"Adaptation is the key!" </p>
          <footer className="blockquote-footer">jainil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
