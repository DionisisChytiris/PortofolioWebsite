import React from "react";
import { Code } from "lucide-react";

function Technologies({ project }) {
  return (
    <div className="bg-white  dark:bg-gray-800  rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Code className="w-5 h-5 text-blue-600" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-400">
          Technologies
        </h3>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-50 dark:bg-gray-700  text-blue-700  dark:text-blue-200 rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:-translate-y-[2px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Languages
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.languages.map((language) => (
              <span
                key={language}
                className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-200 rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:-translate-y-[2px]"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
