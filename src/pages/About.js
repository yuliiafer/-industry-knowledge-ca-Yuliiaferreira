import React from "react";
import Navbar from "../../src/components/Navbar";
import AboutSection from "../components/AboutSection";
import TabSection from "../components/TabSection";
import Footer from "../../src/components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <AboutSection />
      <div className="sectionwrapper contact">
        <p>Here is some of</p>
        <p>works, made by me</p>
        <p>during a studing process.</p>
      </div>
      <TabSection />
      <Footer />
    </>
  );
}

export default About;
