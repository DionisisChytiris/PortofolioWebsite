import React, { useState } from "react";
import { MousePointer, MousePointerClick } from "lucide-react";

function ProjectGallery({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const showPrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );

  const showNext = () =>
    setCurrentIndex((prev) => (prev + 1) % project.images.length);

  return (
    <div
      id="Gallery"
      className="bg-white dark:bg-gray-800  rounded-2xl shadow-lg p-6 mb-6"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-400 mb-4">
        Project Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {project.media.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg shadow-black/20"
            onClick={() => openModal(index)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt="image"
                className="w-full h-24 sm:h-32 md:h-48 transition-transform duration-300 scale-125 group-hover:scale-100 object-cover"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-24 sm:h-32 md:h-48 object-cover"
                muted
                loop
                autoPlay
                playsInline
              />
            )}

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <MousePointerClick className="w-8 h-8 text-gray-300" />
            </div>
          </div>
        ))}
        {/* {project.images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg shadow-black/20"
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt="image"
              className="w-full h-24 sm:h-32 md:h-48 transition-transform duration-300 scale-125 group-hover:scale-100 object-cover "
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
           
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <MousePointerClick className="w-8 h-8 text-gray-300" />
              </div>
          </div>
        ))} */}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-500 dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-80"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-[90px]  right-0 lg:-top-6 lg:-right-24 text-white text-2xl lg:text-3xl p-8"
              onClick={closeModal}
            >
              ✕
            </button>
            {/* <img
              src={project.images[currentIndex]}
              alt={`Large view ${currentIndex + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            /> */}
            {project.media[currentIndex].type === "image" ? (
              <img
                src={project.media[currentIndex].src}
                alt={`Large view ${currentIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={project.media[currentIndex].src}
                controls
                autoPlay
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            )}

            <button
              className="absolute -bottom-[100px] md:top-1/2  left-4 md:-left-10 transform -translate-y-1/2 text-white text-7xl px-4"
              onClick={showPrev}
            >
              ‹
            </button>
            <button
              className="absolute -bottom-[100px] md:top-1/2 right-4 md:-right-10 transform -translate-y-1/2 text-white text-7xl px-4"
              onClick={showNext}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;
