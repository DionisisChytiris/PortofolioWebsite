import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Front_Back_Icons from "./Front_Back_Icons";

function Footer() {
  // const scrollToSection = (section) => {
  //   document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <div>
      <footer className="bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8 px-[5%] ">
        <div className="max-w-7xl mx-auto flex flex-col justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0 text-center">
            <h2 className="text-xl font-bold">Dionysis Chytiris</h2>
            <p className="text-sm mt-2">Full Stack Developer</p>
          </div>

          {/* <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#about" className="hover:text-blue-500 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-500 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>
        </div> */}
          <Front_Back_Icons />

          {/* <div className="flex space-x-5 text-2xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://youtube.com/@yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600"
          >
            <FaYoutube />
          </a>
        </div> */}
        </div>

        <div className="text-center text-sm text-gray-500 mt-6 dark:text-gray-400">
          &copy; {new Date().getFullYear()} DionysisC. All rights reserved.
        </div>
      </footer>
      {/* <footer className="bg-white dark:bg-gray-900 p-10">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <p className="text-gray-900 dark:text-gray-300 text-md">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex dark:text-gray-300 text-gray-900 ml-6 no-underline text-sm gap-4 transition-colors duration-300 ease-in-out">
            {["home", "projects", "about", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-blue-500 before:transform before:scale-x-0 before:transition-transform before:duration-300 before:origin-left hover:before:scale-x-100"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default Footer;
