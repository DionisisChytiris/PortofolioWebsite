import React from "react";
import { Zap, CheckCircle } from "lucide-react";

function Features({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-6 h-6 text-blue-600 " />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-400">Key Features</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {project.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3 transition-transform duration-300 ease-in-out hover:translate-x-1.5">
            <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-200">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
