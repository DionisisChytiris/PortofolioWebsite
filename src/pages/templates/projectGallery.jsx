import React from "react";

function ProjectGallery({ project }) {
  return (
    <div id='projects' className="bg-white dark:bg-gray-800  rounded-2xl shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-400 mb-4">
        Project Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl"
          >
            <img
              src={image}
              alt="image"
                // alt={`${project.title} screenshot ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;
