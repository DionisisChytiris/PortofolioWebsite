import React from "react";
import { webProjects } from "../data/WebProjects";
import { mobileProjects } from "../data/MobileProjects";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle } from "../redux/NavBooleanSlice";
import { MousePointer, MousePointerClick } from "lucide-react";
import { ApiProjects } from "../data/ApiProjects";
import { FaFilePdf, FaDownload, FaFileAlt } from "react-icons/fa";
import { HiDocumentText, HiDownload } from "react-icons/hi";

function Projects() {
  const dispatch = useDispatch();
  return (
    <div>
      <section
        id="projects"
        className="relative px-[5%] py-20 dark:bg-gray-900"
      >
        <div className="absolute top-0 left-0 w-full h-[100px] bg-[#72baf5] dark:bg-gray-800 [clip-path:polygon(0_0,100%_0,100%_30%,0_50%)] md:[clip-path:polygon(0_0,100%_0,100%_50%,0_100%)] z-1"></div>

        {/* <div className="section-header"> */}
        <div>
          <h2 className="text-[1.8rem] md:text-[2.4rem] lg:text-[2.6rem] text-[#495057] dark:text-gray-400 mt-0 md:mt-8 mb-4 font-semibold">
            My Projects
          </h2>
          <div className="flex flex-row gap-10">
            <a
              href="/full_stack_dev_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-green-300"
            >
              {/* <FaFilePdf size={20} /> */}
              <HiDocumentText size={20} />
              View CV
            </a>
            <a
              href="/full_stack_dev_cv.pdf"
              download="DownloadCV.pdf"
              className="flex items-center gap-2 text-white hover:text-orange-300"
            >
              {/* <FaDownload size={20} /> */}
              <HiDownload size={20} />
              Download CV
            </a>
          </div>
          {/* <div className="section-divider"></div> */}
          <p className="text-[1.1rem] lg:text-[1.3rem] text-[#6c757d] dark:text-gray-300 mb-12 leading-[1.6] max-w-[800px] mt-6">
            Showcasing my expertise in mobile and web development
          </p>
        </div>

        <h3 className="text-[1.3rem] lg:text-[1.6rem] text-[#495057]  dark:text-gray-400 mb-4 md:mb-8 font-semibold">
          <span>Mobile Applications</span>
        </h3>
        <div className="project-grid">
          {mobileProjects.map((project) => (
            <div key={project.id} className="project-card dark:bg-gray-500">
              <Link to={project.link} onClick={() => dispatch(toggle())}>
                <div className="project-image-container">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="project-image object-top"
                  />
                  <div className="project-overlay absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <div className="project-link">
                      <MousePointerClick className="w-8 h-8 text-gray-800" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[#212529] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[0.9rem] font-bold text-[#212529] dark:text-gray-700 mb-6 hidden md:block">
                    {project.description}
                  </p>
                  <div className="flex-wrap mt-auto hidden md:flex">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="tech-badge dark:bg-gray-400 text-black dark:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <h3 className="text-[1.3rem] lg:text-[1.6rem]  mt-[100px] text-[#495057]  dark:text-gray-400 mb-4 md:mb-8 font-semibold">
          <span>Web Applications</span>
        </h3>
        <div className="project-grid">
          {webProjects.map((project) => (
            <div key={project.id} className="project-card dark:bg-gray-500">
              <Link to={project.link} onClick={() => dispatch(toggle())}>
                <div className="project-image-container">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="project-image object-top"
                  />
                  <div className="project-overlay">
                    <a href={project.link} className="project-link">
                      <MousePointerClick className="w-8 h-8 text-gray-800" />
                    </a>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[#212529] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[0.9rem] font-bold text-[#212529] dark:text-gray-700 mb-6 hidden md:block">
                    {project.description}
                  </p>
                  <div className="flex-wrap mt-auto hidden md:flex">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="tech-badge  dark:bg-gray-400 text-black dark:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <h3 className="text-[1.3rem] lg:text-[1.6rem]  mt-[100px] text-[#495057]  dark:text-gray-400 mb-4 md:mb-8 font-semibold">
          <span>APIs</span>
        </h3>
        <div className="project-grid">
          {ApiProjects.map((project) => (
            <div key={project.id} className="project-card dark:bg-gray-500">
              <Link to={project.link} onClick={() => dispatch(toggle())}>
                <div className="project-image-container">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="project-image object-top"
                  />
                  <div className="project-overlay">
                    <a href={project.link} className="project-link">
                      <MousePointerClick className="w-8 h-8 text-gray-800" />
                    </a>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-[#212529] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[0.9rem] font-bold text-[#212529] dark:text-gray-700 mb-6 hidden md:block">
                    {project.description}
                  </p>
                  <div className="flex-wrap mt-auto hidden md:flex">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="tech-badge  dark:bg-gray-400 text-black dark:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
