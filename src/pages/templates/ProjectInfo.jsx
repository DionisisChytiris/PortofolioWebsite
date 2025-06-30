import React from "react";
import { Calendar, ExternalLink, Github } from "lucide-react";

function ProjectInfo({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-400 mb-4">
        Project Info
      </h3>
      <div className="space-y-4">
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

        <div className="flex items-center gap-3 p-3 mb-3 bg-blue-50 dark:bg-gray-700   rounded-lg hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors group">
          <ExternalLink className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
          <span className="font-medium text-blue-700">View Live Project</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg dark:bg-gray-700  hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors group">
          <Github className="w-5 h-5 text-gray-600 group-hover:scale-110 transition-transform" />
          <span className="font-medium text-gray-700 dark:text-gray-400">
            View Source Code
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;
