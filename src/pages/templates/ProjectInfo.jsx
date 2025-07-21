import React, { useState, useEffect, useRef } from "react";
import { Calendar, MousePointerClick, ExternalLink } from "lucide-react";
import { FaGlobe, FaGithub, FaApple, FaAndroid } from "react-icons/fa";

function ProjectInfo({ project }) {
  const sectionRef = useRef(null);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // prevent retriggering

  // useEffect(() => {
  //   const timer1 = setTimeout(() => {
  //     setHovered1(true);
  //     setTimeout(() => setHovered1(false), 500); // Simulate 500ms hover
  //   }, 3000); // starts immediately

  //   const timer2 = setTimeout(() => {
  //     setHovered2(true);
  //     setTimeout(() => setHovered2(false), 500);
  //   }, 4000); // starts 1s after timer1

  //   const timer3 = setTimeout(() => {
  //     setHovered3(true);
  //     setTimeout(() => setHovered3(false), 500);
  //   }, 5000); // starts 1s after timer2

  //   return () => {
  //     clearTimeout(timer1);
  //     clearTimeout(timer2);
  //     clearTimeout(timer3);
  //   };
  // }, []);

   useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // only run once

          // Simulate hover one by one
          setTimeout(() => {
            setHovered1(true);
            setTimeout(() => setHovered1(false), 500);
          }, 1000);

          setTimeout(() => {
            setHovered2(true);
            setTimeout(() => setHovered2(false), 500);
          }, 2000);

          setTimeout(() => {
            setHovered3(true);
            setTimeout(() => setHovered3(false), 500);
          }, 3000);
        }
      },
      {
        threshold: 0.3, // trigger when 30% of section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-400 mb-4">
          Project Info
        </h3>
        <div className="space-y-4">
          {project.category === "App Project" ? (
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-500" />
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Completed
                </span>
                <p className="font-medium text-gray-900 dark:text-gray-300">
                  {project.completionDate}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <MousePointerClick className="w-5 h-5 text-gray-500" />
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Check the website below
                </span>
                {/* <p className="font-medium text-gray-900 dark:text-gray-300">
                {project.completionDate}
              </p> */}
              </div>
            </div>
          )}

          {project.category === "App Project" ? (
            <div ref={sectionRef}>
              <a
                href={project.iosLink}
                target="_blank"
                className={`flex items-center gap-3 p-3 mb-3 rounded-lg transition-colors group
                  bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600
                  ${hovered1 ? "!bg-blue-200 !dark:bg-gray-300" : ""}
                `}
              >
                <FaApple
                  className="w-5 h-5 text-gray-600 dark:text-gray-300 transition-transform
                "
                />
                <span className="font-medium text-gray-600 dark:text-gray-400">
                  Download for iOS
                </span>
              </a>
              {/* <a
                href={project.iosLink}
                target="_blank"
                className="flex items-center gap-3 p-3 mb-3 bg-blue-50 dark:bg-gray-700  rounded-lg hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors group"
              >
                <FaApple className="w-5 h-5 text-gray-600 dark:text-gray-300  group-hover:scale-110 transition-transform" />
                <span className="font-medium text-gray-600 dark:text-gray-400 ">
                  Download for iOS
                </span>
              </a> */}
              <a
                href={project.androidLink}
                target="_blank"
                // className="flex items-center gap-3 p-3 mb-3 bg-blue-50 dark:bg-gray-700   rounded-lg hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors group"
                className={`flex items-center gap-3 p-3 mb-3 rounded-lg transition-colors group
                  bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600
                  ${hovered2 ? "!bg-blue-200 !dark:bg-gray-300" : ""}
                `}
              >
                <FaAndroid className="w-5 h-5 text-gray-600 dark:text-gray-300  group-hover:scale-110 transition-transform" />
                <span className="font-medium text-gray-600 dark:text-gray-400 ">
                  Download for Android
                </span>
              </a>
            </div>
          ) : (
            <div>
              <a
                href={project.websiteLink}
                target="_blank"
                className="flex items-center gap-3 p-3 mb-3 bg-blue-50 dark:bg-gray-700  rounded-lg hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors group"
              >
                <FaGlobe className="w-5 h-5 text-gray-600 dark:text-gray-300  group-hover:scale-110 transition-transform" />
                <span className="font-small text-gray-600 dark:text-gray-400 ">
                  {project.websiteLink}
                </span>
              </a>
            </div>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            // className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg dark:bg-gray-700  hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors group"
            className={`flex items-center gap-3 p-3 mb-3 rounded-lg transition-colors group
                  bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600
                  ${hovered3 ? "!bg-blue-200 !dark:bg-gray-300" : ""}
                `}
          >
            <FaGithub className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-gray-700 dark:text-gray-400">
              View Source Code on Github
            </span>
          </a>
          {project.category === "App Project" && (
            <div>
              <img
                src={project.projectQRcode}
                alt="QR code"
                className="w-1/2 mx-auto mt-10 mb-5"
              />
              <div className="text-gray-600 dark:text-gray-300 flex justify-center">
                Download the App
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectInfo;
