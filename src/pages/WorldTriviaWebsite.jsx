import ProjectGallery from "./templates/projectGallery";
import ProjectHeader from "./templates/ProjectHeader";
import Features from "./templates/Features";
import Challenges from "./templates/Challenges";
import ProjectInfo from "./templates/ProjectInfo";
import Technologies from "./templates/Technologies";

const project = {
  photo: "worldTrivia.png",
  title: "World Wise Trivia Website",
  category: "Web Project",
  opacity: false,
  technologies: [
    "React+Vite",
    "Redux Toolkit",
    "i18next",
    "Node.js",
    "MongoDB",
    "Express",
    "Tailwind CSS",
  ],
  languages: ["JavaScript"],
  fullDescription:
    "A modern, responsive website built to showcase World Wise Trivia — a mobile quiz app about cities, capitals, flags, and monuments. It highlights the app’s features, supports multiple languages, and delivers a smooth user experience using React.",
  media: [
    { type: "video", src: "/websites/vid3.mp4" },
    { type: "image", src: "/worldTrivia.png" },
    { type: "image", src: "/websites/trivia3.png" },
    { type: "image", src: "/websites/trivia4.png" },
    { type: "image", src: "/websites/trivia6.png" },
    { type: "image", src: "/websites/trivia5.png" },
    { type: "image", src: "/websites/trivia2.png" },
    // { type: "video", src: "quizVid2.mp4" },
  ],
  images: [
    "/worldTrivia.png",
    "/websites/trivia3.png",
    "/websites/trivia4.png",
    "/websites/trivia6.png",
    "/websites/trivia5.png",
    "/websites/trivia2.png",
    // "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    // 'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=800',
    // 'https://images.pexels.com/photos/4162494/pexels-photo-4162494.jpeg?auto=compress&cs=tinysrgb&w=800',
    // 'https://images.pexels.com/photos/3768905/pexels-photo-3768905.jpeg?auto=compress&cs=tinysrgb&w=800',
    // "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800",
  ],
  features: [
    "Built with React and Vite for speed and scalability",
    "Responsive layout optimized for mobile and desktop",
    "Dynamic content powered by app data (monuments, flags, capitals, etc.)",
    "Showcases key app features and visuals clearly",
    "Smooth navigation with scroll-based animations",
    "Interactive sections to boost user engagement",
    "Advanced filtering and search",
     "Integrated contact form for user feedback and support",
  ],
  challenges: [
    "Designing a website that visually matches the mobile app branding",
    "Ensuring fast load times despite rich visuals and assets",
    "Handling multilingual content across both app and site",
    "Implementing responsive UI that adapts to all screen sizes",
    "Balancing engaging design with performance optimization",
    "Keeping the content structure scalable for future updates",
    "Maintaining accessibility standards across all devices",
  ],
   typeofProject:"Website",
  websiteLink: "https://world-wise-trivia-app-website.vercel.app/",
  githubLink: "https://github.com/DionisisChytiris/WorldWiseTriviaAppWebsite",
};

function WorldTriviaWebsite() {
  return (
    <div>
      <div className="h-auto bg-gray-200 dark:bg-gray-700 px-4 sm:px-8 md:px-16 lg:px-22  py-8">
        <div className="fixed top-[130px] md:top-[100px] right-4 md:right-10 rounded-xl bg-gray-500/80 text-white text-right text-[12px] md:text-[14px] py-2 px-4 z-50">
          World Wise Trivia Website
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
          {/* Project Header */}
          <ProjectHeader project={project} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-[100px]">
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

export default WorldTriviaWebsite;
