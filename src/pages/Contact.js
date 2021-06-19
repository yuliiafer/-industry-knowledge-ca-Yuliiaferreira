import React from "react";
import Navbar from "../../src/components/Navbar";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="sectionwrapper contact">
        <h3>You can contact me:</h3>
        <p>by phone:</p>
        <h4>+47 92133133,</h4>
        <p>by e-mail,</p>
        <p>or send a message in the form below.</p>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
