import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

const Cards = () => {
  return (
    <div className="sectionwrapper">
      <CardDeck className="carddeck">
        <Card className="card1">
          <Card.Img
            className="cardimg"
            variant="top"
            src="images/3.jpg"
            alt="education"
          />
          <Card.Body>
            <Card.Title className="carddtext">My Education</Card.Title>
            <Card.Text className="ctext">
              2019 - 2021 "Noroff" Begen, Norway. "Front-end Developing".
            </Card.Text>
            <Card.Text className="ctext">
              2002-2006: Hotell– og restaurantsvirksomhet; Institutt for ledelse
              og turisme, "Kyiv National University of Culture and Arts".
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card1">
          <Card.Img
            className="cardimg"
            variant="top"
            src="images/skills.jpg"
            alt="computer"
          />
          <Card.Body>
            <Card.Title className="carddtext">My Skills</Card.Title>
            <Card.Text className="ctext">
              HTML, CSS, JavaScript, React JS.
            </Card.Text>
            <Card.Text className="ctext">
              Wordpress, Bootstrap, Strapi API.
            </Card.Text>
            <Card.Text className="ctext">
              Adobe Illustrator, Adobe Ps, Adobe XD, Figma.
            </Card.Text>
            <Card.Text className="ctext">
              Languages: English, Norwegian, Russian; Ukrainian.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Cards;
