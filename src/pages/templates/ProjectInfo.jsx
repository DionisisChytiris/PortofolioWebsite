import React from "react";
import { Calendar, ExternalLink} from "lucide-react";
import { FaGithub, FaApple, FaAndroid } from "react-icons/fa";

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

        <a
          href={project.iosLink}
          target="_blank"
          className="flex items-center gap-3 p-3 mb-3 bg-blue-50 dark:bg-gray-700  rounded-lg hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors group"
        >
          <FaApple className="w-5 h-5 text-gray-600 dark:text-gray-300  group-hover:scale-110 transition-transform" />
          <span className="font-medium text-gray-600 dark:text-gray-400 ">Download for iOS</span>
        </a>
        <a  href={project.androidLink}
          target="_blank" className="flex items-center gap-3 p-3 mb-3 bg-blue-50 dark:bg-gray-700   rounded-lg hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors group">
          <FaAndroid className="w-5 h-5 text-gray-600 dark:text-gray-300  group-hover:scale-110 transition-transform" />
          <span className="font-medium text-gray-600 dark:text-gray-400 ">Download for Android</span>
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg dark:bg-gray-700  hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors group"
        >
          <FaGithub className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform" />
          <span className="font-medium text-gray-700 dark:text-gray-400">
            View Source Code on Github
          </span>
        </a>
        <div>
          <img
            src={project.projectQRcode}
            alt="QR code"
            className="w-1/2 mx-auto mt-10 mb-5"
          />
          <div className="text-gray-600 dark:text-gray-300 flex justify-center">Download the App</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;
