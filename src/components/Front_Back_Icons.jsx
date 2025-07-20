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
  SiPython,
} from "react-icons/si";

function Front_Back_Icons() {
  return (
    <div className="flex mt-10 flex-wrap max-w-[100%] sm:max-w-full justify-center sm:justify-start">
      <div className="tech-icon dark:bg-gray-300">
        <SiHtml5 className="text-orange-600 text-[1.5rem]" />
      </div>
      <div className="tech-icon dark:bg-gray-300">
        <SiCss3 className="text-blue-600 text-[1.5rem]" />
      </div>
      <div className="tech-icon dark:bg-gray-300">
        <SiJavascript className="text-yellow-500 hover:scale-110 transition-transform duration-300 text-[1.5rem]" />
      </div>
      <div className="tech-icon dark:bg-gray-300">
        <SiReact className="text-blue-600 text-[1.5rem]" />
      </div>
      <div className="tech-icon dark:bg-gray-300">
        <SiNodedotjs className="text-green-700 hover:scale-110 transition-transform duration-300 text-[1.5rem]" />
      </div>

      <div className="tech-icon dark:bg-gray-300">
        <SiNestjs className="text-red-600 text-[1.5rem]" />
      </div>
      <div className="tech-icon dark:bg-gray-300">
        <SiMongodb className="text-green-600 text-[1.5rem]" />
      </div>
      <div className="tech-icon dark:bg-gray-300">
        <SiPostgresql className="text-blue-700 text-[1.5rem]" />
      </div>
      <div className="tech-icon dark:bg-gray-300">
        <SiTailwindcss className="text-blue-600 text-[1.5rem]" />
      </div>
      <div className="tech-icon dark:bg-gray-300">
        <SiPython className="text-green-500 text-[1.5rem]" />
      </div>
      <img
        src="/FastAPI.png"
        alt="FastAPI"
        className="tech-icon w-6 h-6"
      />
    </div>
  );
}

export default Front_Back_Icons;
