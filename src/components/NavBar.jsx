import React, { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import ThemeDropdown from "./DropDownModeMenu";
import { Link, Links } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../redux/NavBooleanSlice";
// import { toggle } from "../redux/NavBooleanSlice";

function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  //   const [isLoaded, setIsLoaded] = useState(false);
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch();
  const isHomePage = useSelector((state) => state.boolean.value);

  useEffect(() => {
    // setIsLoaded(true);

    // Add scroll event listener to update active section based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = ["home", "projects", "about", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + height - 100
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    const offset = 50; // Adjust this based on your navbar height

    if (element) {
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
    // document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection1 = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    const offset = 120; // Adjust this based on your navbar height

    if (element) {
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
    // document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-[5%] py-4 bg-white/95 dark:bg-gray-900 dark:shadow-[0_4px_6px_-1px_rgba(255,255,255,0.15)] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]  sticky top-0 z-[100] backdrop-blur-md">
      <Link to="/" onClick={() => dispatch(!toggle())}>
        <div className="flex items-center">
          <span className="text-xl font-bold dark:text-gray-300 text-gray-800">
            Portfolio
          </span>
          <div className="w-2 h-2 bg-blue-600 rounded-full ml-1 animate-pulse"></div>
        </div>
      </Link>

      <div className="gap-4 items-center text-sm hidden md:flex">
        {["light", "dark", "system"].map((mode) => (
          <button
            key={mode}
            onClick={() => setTheme(mode)}
            className={
              (theme === mode
                ? "font-bold text-black dark:text-gray-200"
                : "text-black dark:text-gray-300") +
              " hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            }
          >
            {mode.charAt(0).toUpperCase() + mode.slice(1)}
          </button>
        ))}
      </div>
      <div className="flex md:hidden absolute  bottom-16 sm:bottom-7 right-3">
        <ThemeDropdown theme={theme} setTheme={setTheme} />
      </div>

      {!isHomePage ? (
        // Project Navbar
        <div className="flex justify-center ">
          <Link
            to="/"
            className="text-gray-600 mt-[5px] dark:text-gray-400 hover:scale-110 transition-transform duration-300 text-[18px]"
            onClick={() => dispatch(toggle())}
          >
            Portofolio
          </Link>
          <nav className="flex">
            {["Gallery","Challenges"].map((section) => (
              <div
                key={section}
                onClick={() => scrollToSection1(section)}
                className={`
            ml-6 relative cursor-pointer text-base py-2
            transition-colors duration-300 
            ${
              activeSection === section
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }
              
            before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px]
            before:bg-blue-500 before:transform before:scale-x-0 before:transition-transform before:duration-300 before:origin-left
            hover:before:scale-x-100
            ${activeSection === section ? "before:scale-x-100" : ""}
            `}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </div>
            ))}
          </nav>
        </div>
      ) : (
        // Main Navbar 
        <nav className="flex">
          {["home", "projects", "about", "contact"].map((section) => (
            <div
              key={section}
              onClick={() => scrollToSection(section)}
              className={`
            ml-6 relative cursor-pointer text-base py-2
            transition-colors duration-300 
            ${
              activeSection === section
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }
              
            before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px]
            before:bg-blue-500 before:transform before:scale-x-0 before:transition-transform before:duration-300 before:origin-left
            hover:before:scale-x-100
            ${activeSection === section ? "before:scale-x-100" : ""}
            `}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}

export default NavBar;
