import React from "react";
import Navbar from "../../src/components/Navbar";
import Header from "../../src/components/Header";
import Works from "../../src/components/Works";
import ContactForm from "../../src/components/ContactForm";
import Footer from "../../src/components/Footer";
import Cards from "../../src/components/Cards";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Cards />
      <h4 className="sectionwrapper">Example of My Works</h4>
      <Works />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
