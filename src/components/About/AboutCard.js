import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sugavanaesh </span>
            from <span className="purple"> Coimbatore, India.</span>
            <br />I am pursuing Computer Science and Engineering in Sri Eshwar College of Engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> E-sketch
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Live in disappointment so you dont get Expectations"{" "}
          </p>
          <footer className="blockquote-footer">sugavanaesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
