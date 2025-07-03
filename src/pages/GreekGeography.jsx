import React, { useState } from "react";
import ProjectGallery from "./templates/projectGallery";
import ProjectHeader from "./templates/ProjectHeader";
import Features from "./templates/Features";
import Challenges from "./templates/Challenges";
import ProjectInfo from "./templates/ProjectInfo";
import Technologies from "./templates/Technologies";
import MockPhones from "./templates/MockPhones";
import MockTablet from "./templates/MockTablet";
import { Monitor, Smartphone } from "lucide-react";

const project = {
  photo: "meteora.jpg",
  title: "Greek Geography Quiz App",
  category: "App Project",
  opacity: true,
  technologies: [
    "React Native",
    "Expo",
    "Redux Toolkit",
    "Node.js",
    "MongoDB",
    "Google Analytics",
  ],
  languages: ["JavaScript", "TypeScript"],
  fullDescription:
    " Comprehensive color system with primary blue If youre planning to display multiple projects in the future, then change ProjectGallery to accept a projects array and iterate like",
  images: [
    "greekGeoApp/img1pro.png",
    "meteora.jpg",
    "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4162494/pexels-photo-4162494.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3768905/pexels-photo-3768905.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800",
  ],
  features: [
    "Kanban board interface",
    "Team collaboration tools",
    "Time tracking and reporting",
    "File attachments and comments",
    "Custom project templates",
    "Real-time notifications",
    "Advanced filtering and search",
  ],
  challenges: [
    "Implementing real-time collaboration",
    "Designing intuitive drag-and-drop interface",
    "Optimizing database queries for large datasets",
    "Creating responsive design for all devices",
  ],
  completionDate: "October 2024",
  iosLink: "https://apps.apple.com/app/id6504780092",
  androidLink: "https://play.google.com/store/apps/details?id=com.greekgeographyquizapp.dion&pli=1",
  githubLink: "https://github.com/DionisisChytiris/GreekGeographyQuizUpdate",
  projectQRcode:"greekGeoApp/GreekGeographySmartLink.png"
};

let screenshotsMobile = [
  { phone: "greekGeoApp/img1.png" },
  { phone: "greekGeoApp/img2.png" },
  { phone: "greekGeoApp/img3.png" },
  { phone: "greekGeoApp/img4.png" },
  { phone: "greekGeoApp/img5.png" },
  { phone: "greekGeoApp/img6.png" },
  { phone: "greekGeoApp/img7.png" },
  { phone: "greekGeoApp/img8.png" },
  { phone: "greekGeoApp/img9.png" },
  { phone: "greekGeoApp/img10.png" },
];

let screenshotsTablet = [
  { phone: "meteora.jpg" },
  { phone: "mainimg.png" },
  { phone: "realMadrid.png" },
  { phone: "worldTrivia.png" },
];

function GreekGeography() {
  const [phone, setPhone] = useState(true);
  return (
    <div>
      <div className="h-auto bg-gray-200 dark:bg-gray-700 px-4 sm:px-8 md:px-16 lg:px-22  py-8">
        <div className="flex flex-row  gap-2 fixed top-[130px] md:top-[100px] right-4 md:right-10 rounded-xl bg-gray-500/80 text-white text-right text-[12px] md:text-[14px] py-2 px-4 z-50">
          <img
            src="greekGeoApp/logo.png"
            className="w-5 h-5 bg-white rounded-md object-contain"
          />
          <div> Greek Geography Quiz App</div>
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
          {/* Project Header */}
          <ProjectHeader project={project} />
          <div className="flex flex-row gap-0 md:gap-2 mb-4 md:-mb-8 relative z-[10] pt-12">
            <div
              onClick={() => setPhone(true)}
              className={`flex flex-row items-center text-white px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                phone ? "bg-blue-600 font-bold" : "bg-gray-700"
              }`}
            >
              <Smartphone className="w-4 h-4 text-white" />
              <div className="ml-2 hidden md:block">Mobile</div>
            </div>
            <div
              onClick={() => setPhone(false)}
              className={`flex flex-row items-center text-white px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                !phone ? "bg-blue-600 font-bold" : "bg-gray-700"
              }`}
            >
              <Monitor className="w-4 h-4 text-white" />
              <div className="ml-2 hidden md:block">Tablet</div>
            </div>
          </div>

          {phone ? (
            <MockPhones screenshots={screenshotsMobile} />
          ) : (
            <MockTablet screenshots={screenshotsTablet} />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <ProjectGallery project={project} />

              {/* Features */}
              <Features project={project} />
              {/* Challenges */}
              <Challenges project={project} />
            </div>
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <ProjectInfo project={project} />

              {/* Technologies */}
              <Technologies project={project} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GreekGeography;
