import React from "react";
import Tilt from "react-tilt";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="hero-image">
          <div className="sectionwrapper">
            <h1 className="header-h">Portfolio</h1>
            <h2 className="header-title">Yuliia Ferreira</h2>
          </div>
          <div className="containers">
            <Tilt
              className="cards"
              options={{
                speed: 400,
                max: 35,
                glare: true,
                "max-glare": 1,
              }}
            >
              <div className="content">
                <img
                  className="content-image"
                  src="images/creativity.png"
                  alt="icon-about"
                />
                <h3 className="content-title">About Me</h3>
                <p className="content-text">
                  {" "}
                  Hi, my name is Yuliia and I am studing “Front end development”
                  at “Noroff” in Bergen. I love design, coding and creativity.
                </p>
              </div>
            </Tilt>

            <Tilt
              className="cards"
              options={{ 
                  speed: 400, 
                  max: 35, 
                  glare: true, 
                  "max-glare": 1 }}
            >
              <div className="content">
                <img
                  className="content-image"
                  src="images/design.png"
                  alt="icon-development"
                />
                <h3 className="content-title">Design and Development</h3>
                <p className="content-text">
                  I like to create clean, modern design, optimazed for
                  perfomance, search engines.
                </p>
              </div>
            </Tilt>

            <Tilt
              className="cards"
              options={{ 
                  speed: 400, 
                  max: 35, 
                  glare: true, 
                  "max-glare": 1 }}
            >
              <div className="content">
                <img
                  className="content-image"
                  src="images/responsive-design.png"
                  alt="icon-responsive"
                />
                <h3 className="content-title">Responsive Website</h3>
                <p className="content-text">
                  A responsive design makes your website accessible to all
                  users, regardless of their device.
                </p>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
