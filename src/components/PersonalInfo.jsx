import React from "react";
import Front_Back_Icons from "./Front_Back_Icons";


function PersonalInfo() {
  // const scrollToSection = (section) => {
  //   document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  // };
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    const offset = 70; // Adjust this based on your navbar height

    if (element) {
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <section
        id="home"
        // className="hero-section"
        className="relative flex flex-wrap items-center justify-between px-[5%] py-20 bg-white dark:bg-gray-900 overflow-hidden "
      >
        <div className="flex-1 min-w-[300px] mr-8 relative z-[1]">
          <div className="max-w-[600px]">
            <p className="greeting text-lg text-[#4361ee] dark:text-gray-300 mb-4 font-medium tracking-[1px] relative inline-block">
              Hello, I'm
            </p>
            <h1 className="text-[2.1rem] md:text-[2.9rem] xl:text-[3.5rem] font-extrabold mb-4 leading-[1.2] bg-gradient-to-r from-[#212529] dark:from-[#6a7077] to-[#4361ee] dark:to-[#7e96ff] bg-clip-text text-transparent">
              {/* Your Name */} Dionysis Chytiris
            </h1>
            <h2 className="text-[1.5rem] lg:text-[1.8rem] text-[#495057] dark:text-gray-400 mb-4 font-semibold">
              Full Stack Developer
            </h2>
            <p className="text-[1.1rem] lg:text-[1.3rem] text-[#6c757d] dark:text-gray-300 mb-8 leading-[1.6] max-w-[600px]">
              Specialized in building exceptional mobile apps and web
              experiences with a focus on performance and user experience
            </p>
            <div className="flex mt-6">
              <button
                className="primary-button"
                onClick={() => scrollToSection("projects")}
              >
                <span>View My Work</span>
                {/* <i className="fas fa-arrow-right"></i> */}
              </button>
              <button
                className="secondary-button"
                onClick={() => scrollToSection("contact")}
              >
                <span>Contact Me</span>
              </button>
            </div>
          </div>
         <Front_Back_Icons/>
        </div>
        {/*  large screens */}
        <div className="absolute top-0 right-0 w-[38%] h-full bg-[#297ccf] dark:bg-[#35516d] z-0 [clip-path:polygon(25%_0%,100%_0%,100%_100%,0%_100%)] hidden lg:block">
          <div className="h-full flex items-center justify-center transition-transform duration-500 easy hover:scale-105">
            <div className="group w-[280px] h-[280px] xl:w-[350px] xl:h-[350px] rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] ml-10 relative z-[1] flex items-center justify-center">
              <div className="absolute top-[-20px] left-[-20px] right-[-20px] bg-[#43ee6e] opacity-10 rounded-full -z-10 transition-transform duration-300" />
              <img
                src="profile.jpg"
                alt="Developer portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-[300px] h-[300px] rounded-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-110">
            <img
              src="profile.jpg"
              alt="Developer"
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}

        {/* medium to small screens */}
        <div className=" block lg:hidden">
          <div className="absolute top-3 md:top-6 right-6 w-[100px] h-[100px]  sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] z-10 flex items-center justify-center">
            <div className="absolute top-[-50px] left-[-20px] right-[-20px] bg-[#43ee6e] opacity-10 rounded-full -z-10"></div>
            <img
            src="profile.jpg"
              // src="https://api.a0.dev/assets/image?text=Professional+Developer+Portrait+with+modern+background&aspect=1:1&seed=dev123"
              alt="Developer portrait"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Background polygon shape */}
          <div className="absolute top-0 right-0 w-full h-full bg-[#297ccf] dark:bg-[#35516d]  z-0 [clip-path:polygon(0%_0%,100%_0%,100%_10%,0%_5%)] md:[clip-path:polygon(0%_0%,100%_0%,100%_30%,0%_5%)] block lg:hidden"></div>
        </div>
      </section>
    </>
  );
}

export default PersonalInfo;
