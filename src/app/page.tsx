"use client";

import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Parallax from "@/components/Parallax";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack"; // Import TechStack component

const Home = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="TechStack">
        <TechStack /> {/* Add TechStack section here */}
      </section>
      <section>
        <Parallax type="services" />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section>
        <Parallax type="projects" />
      </section>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
