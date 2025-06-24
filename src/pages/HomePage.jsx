import React from "react";
// import { useTheme } from "../hooks/useTheme";
import "../styles/HomePage.css";
import PersonalInfo from "../components/PersonalInfo";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <>
      <PersonalInfo/>
      <Projects/>
      <About/>
      <Contact/>
    </>
  );
};

export default HomePage;
