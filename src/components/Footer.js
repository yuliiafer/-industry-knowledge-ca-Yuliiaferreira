import React from "react";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container-footer sectionwrapper">
        <div className="row">
          <div className="col">
            <h6>Links to sosial media:</h6>
            <a
              href="https://www.facebook.com/"
              className="col-link"
              target="_blank" rel="noreferrer"
            >
              <img
                className="socialmedia"
                src="images/facebook.png"
                alt="facebook"
              />
            </a>

            <a
              href="https://www.instagram.com/ula_333/"
              className="col-link"
              target="_blank" rel="noreferrer"
            >
              <img
                className="socialmedia"
                src="images/instagram.png"
                alt="instagram"
              />
            </a>
            <a
              href="https://twitter.com/FerreiraYuliia"
              className="col-link"
              target="_blank" rel="noreferrer"
            >
              <img
                className="socialmedia"
                src="images/twitter.png"
                alt="twitter"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/yuliia-ferreira-313a50191/"
              className="col-link"
              target="_blank" rel="noreferrer"
            >
              <img
                className="socialmedia"
                src="images/linkdin.png"
                alt="linkdin"
              />
            </a>
            <a
              href="https://www.behance.net/onboarding"
              className="col-link"
              target="_blank" rel="noreferrer"
            >
              <img className="socialmedia" src="images/be.png" alt="behance" />
            </a>
          </div>
          <div className="col">
            <h6>Phone:</h6>
            <p>
              <i className="fas fa-phone-alt"></i> +47 92133133
            </p>
          </div>
          <div className="col">
            <h6>Email:</h6>
            <p>
              <i className="fas fa-envelope"></i> julia.av.ferreira@gmail.com
            </p>
            <p>
              <i className="fas fa-envelope"></i> yuliia.ferreira@online.no
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy; {new Date().getFullYear()} Yuliia Ferreira | All right
            reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
