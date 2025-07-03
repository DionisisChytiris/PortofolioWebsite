import React from "react";
import { Monitor, Smartphone } from "lucide-react";

function ProjectHeader({ project }) {
  const icon = project.category === "Web Project" ? (<Monitor className="w-6 h-6 text-white" />): (<Smartphone className="w-6 h-6 text-white" />)

  const opac = project.opacity ? '20': '40'

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
      <div className="relative ">
        <img
          src={project.photo}
          alt={project.title}
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover  object-top "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {/* <div className={`absolute bottom-6 left-6 right-6 bg-gray-700/40 rounded-lg p-6`}> */}
        <div className={` relative lg:absolute bottom-0 lg:bottom-6  left-0 lg:left-6 right-6 bg-gray-700/${opac} rounded-lg p-6`}>
          <div className="flex items-center gap-3 mb-4">
            {icon}
            <span className="text-white text-sm lg:text-lg font-medium capitalize">
              {project.category} 
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2">
            {project.title}
          </h1>
          <p className="text-blue-100  text-md md:text-lg max-w-3xl">
            {project.fullDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
