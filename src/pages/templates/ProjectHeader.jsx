import React from "react";
import { Monitor } from "lucide-react";

function ProjectHeader({ project }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
      <div className="relative ">
        <img
          src={project.photo}
          alt={project.title}
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-3 mb-4">
            <Monitor className="w-6 h-6 text-white" />
            <span className="text-white text-lg font-medium capitalize">
              {project.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {project.title}
          </h1>
          <p className="text-blue-100 text-lg max-w-3xl">
            {project.fullDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
