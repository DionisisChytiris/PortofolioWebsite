import React from "react";
import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiPython,
  SiVercel,
  SiDocker,
  SiPostman,
  SiTypescript,
} from "react-icons/si";
import { MdDevices } from "react-icons/md";

function About() {
  return (
    <div>
      <section id="about" className="relative px-[5%] py-20 dark:bg-gray-900">
        <div className="absolute top-0 left-0 w-full h-[100px] bg-[#67a9eb] dark:bg-gray-800 [clip-path:polygon(0_0,100%_0,100%_50%,0_30%)] md:[clip-path:polygon(0_0,100%_0,100%_100%,0_50%)] z-1"></div>
        <div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] lg:text-[2.6rem] text-[#495057] dark:text-gray-400 mt-0 md:mt-6 mb-4 font-semibold">
            About Me
          </h2>
          <p className="text-[1.1rem] lg:text-[1.3rem] text-[#6c757d] dark:text-gray-300 mb-6 leading-[1.6] max-w-[800px]">
            My journey, skills, and expertise
          </p>
        </div>
        <div className="about-content">
          <div className="about-image-container">
            <img
              src="https://api.a0.dev/assets/image?text=Developer+Working+on+Modern+Workspace+with+Multiple+Screens&aspect=4:3&seed=workspace"
              alt="Developer working"
              className="about-image"
            />
            <div className="experience-badge">
              <span className="experience-years">3+</span>
              <span className="experience-text">
                Years
                <br />
                Experience
              </span>
            </div>
          </div>
          <div className="flex-1 min-w-[300px]">
            <h3 className="text-[1.55rem] md:text-[1.75rem] font-bold text-[#212529] dark:text-gray-500 mb-12 leading-[1.4]">
              Full Stack Developer with expertise in React Native and Web
              Technologies
            </h3>
            <p className="text-[1.1rem] md:text-[1.2rem] text-[#495057] dark:text-gray-400 mb-6 leading-[1.5] md:leading-[1.7]">
              I'm a passionate developer with extensive experience building both
              mobile and web applications. My journey in software development
              has equipped me with a diverse skill set that allows me to create
              end-to-end solutions for various business needs.
            </p>
            <p className="text-[1.1rem] md:text-[1.2rem] text-[#495057] dark:text-gray-400 mb-6 leading-[1.5] md:leading-[1.7]">
              With a focus on creating intuitive user experiences and robust
              backend systems, I strive to deliver high-quality applications
              that solve real-world problems and exceed client expectations.
            </p>

            <h4 className="relative inline-block mt-8 mb-6 text-[#343a40] dark:text-gray-400 font-bold text-xl md:text-2xl">
              My Skills{" "}
              <span className="absolute bottom-[-8px] left-0 w-10 h-[3px] bg-[#4361ee] block"></span>
            </h4>
            <div className="flex flex-wrap">
              <div className="flex-none basis-1/2 min-w-[250px] mb-6">
                {/* <div className="flex-none basis-1/3  mb-6"> */}
                <h5 className="skill-category-title">Frontend</h5>
                <div className="skills-list">
                  <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                    <SiReact className="text-blue-500 dark:text-blue-300 text-[1rem] mr-2" />
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      React & React Native
                    </span>
                  </div>
                  <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                    <SiJavascript className="text-yellow-500 hover:scale-110 transition-transform duration-300 text-[1rem] mr-2" />
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      JavaScript
                    </span>
                  </div>
                  <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                    <SiTypescript className="text-blue-500 hover:scale-110 transition-transform duration-300 text-[1rem] mr-2" />
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      TypeScript
                    </span>
                  </div>
                  <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                    <SiHtml5 className="text-orange-600 text-[1rem] mr-2" />
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      HTML5
                    </span>
                  </div>
                  <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                    <SiCss3 className="text-blue-600 text-[1rem] mr-2" />
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      CSS3
                    </span>
                  </div>
                  <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                    <SiRedux
                      className="text-purple-700 dark:text-purple-400 mr-2"
                      title="Redux"
                    />{" "}
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      Redux & Context API
                    </span>
                  </div>
                  <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                    <MdDevices
                      className="text-green-600 dark:text-green-400 mr-2"
                      title="Responsive Design"
                    />
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      Responsive Design
                    </span>
                  </div>
                  <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                    <SiTailwindcss className="text-blue-600 text-[1rem] mr-2" />
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      Tailwind
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-none basis-1/2 min-w-[250px] mb-6">
                <h5 className="skill-category-title">Backend</h5>
                <div className="skills-list">
                  <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                    <SiNodedotjs className="text-green-700 dark:text-green-300 hover:scale-110 transition-transform duration-300 text-[1rem] mr-2" />
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      Node.js & Express
                    </span>
                  </div>
                  <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                    <SiNestjs className="text-red-600 text-[1rem] mr-2" />
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      Nest JS
                    </span>
                  </div>
                  <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                    <SiMongodb className="text-green-600 text-[1rem] mr-2" />
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      MongoDB
                    </span>
                  </div>
                  <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                    <SiPostgresql className="text-blue-700 dark:text-blue-200 text-[1rem] mr-2" />
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      PostgreSQL
                    </span>
                  </div>
                </div>

                <h5 className="skill-category-title mt-12">Extras</h5>
                <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                  <SiPython className="text-green-700 dark:text-green-200 text-[1rem] mr-2" />
                  <span className="text-base text-gray-600 dark:text-gray-300">
                    Python
                  </span>
                </div>
                <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                  <SiVercel className="text-black dark:text-white text-[1rem] mr-2" />
                  <span className="text-base text-gray-600 dark:text-gray-300">
                    Vercel
                  </span>
                </div>
                <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                  <img
                    src="render.png"
                    alt="Description"
                    className="w-6 h-auto bg-gray-400 rounded-md mr-2 -ml-1"
                  />
                  <span className="text-base text-gray-600 dark:text-gray-300">
                    Render
                  </span>
                </div>
                <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                  <img
                    src="neon1.png"
                    alt="Description"
                    className="w-6 h-auto rounded-md mr-2 -ml-1"
                  />
                  <span className="text-base text-gray-600 dark:text-gray-300">
                    Neon
                  </span>
                </div>
                <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                  <SiDocker className="text-blue-500 dark:text-blue-300 text-[1rem] mr-2" />
                  <span className="text-base text-gray-600 dark:text-gray-300">
                    Docker
                  </span>
                </div>
                <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                  <SiPostman className="text-orange-500 dark:text-orange-300 text-[1rem] mr-2" />
                  <span className="text-base text-gray-600 dark:text-gray-300">
                    Postman
                  </span>
                </div>
              </div>

              {/* <div className="skill-category">
                <h5 className="skill-category-title">Extra</h5>
                <div className="skills-list">
                  <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                    <SiNodedotjs className="text-green-700 dark:text-green-300 hover:scale-110 transition-transform duration-300 text-[1rem] mr-2" />
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      Node.js & Express
                    </span>
                  </div>
                  <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                    <SiNestjs className="text-red-600 text-[1rem] mr-2" />
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      AWS & Firebase
                    </span>
                  </div>
                  <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                    <SiMongodb className="text-green-600 text-[1rem] mr-2" />
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      MongoDB
                    </span>
                  </div>
                  <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                    <SiPostgresql className="text-blue-700 dark:text-blue-200 text-[1rem] mr-2" />
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      PostgreSQL
                    </span>
                  </div>
                  <div className="flex items-center mb-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
                    <SiPython className="text-green-700 dark:text-green-200 text-[1rem] mr-2" />
                    <span className="text-base text-gray-600 dark:text-gray-300">
                      Python
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
