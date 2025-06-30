import React from "react";
import { Target } from "lucide-react";

function Challenges({project}) {
  return (
    <div id='about' className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-6 h-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-400">
          Challenges & Solutions
        </h2>
      </div>
      <div className="space-y-3">
        {project.challenges.map((challenge, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 bg-purple-100 dark:bg-purple-800 rounded-lg"
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-200">{challenge}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Challenges;
