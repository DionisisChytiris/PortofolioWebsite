import ProjectGallery from "./templates/projectGallery";
import ProjectHeader from "./templates/ProjectHeader";
import Features from "./templates/Features";
import Challenges from "./templates/Challenges";
import ProjectInfo from "./templates/ProjectInfo";
import Technologies from "./templates/Technologies";

const project = {
  photo: "realMadrid.png",
  title: "Real Madrid FC Website",
  category: "Web Project",
  opacity: true,
  technologies: [
    "React",
    "Vite",
    "Styled Components"
  ],
  languages: ["JavaScript", "HTML", "CSS"],
  fullDescription:
    " Comprehensive color system with primary blue If youre planning to display multiple projects in the future, then change ProjectGallery to accept a projects array and iterate like",
  media: [
    { type: "video", src: "/websites/vid2.mp4" },
    { type: "image", src: '/websites/real1.png' },
    { type: "image", src: '/websites/real2.png' },
    { type: "image", src: '/websites/real3.png' },
    { type: "image", src: '/websites/real4.png' },
    { type: "image", src: '/websites/real5.png' },
    { type: "image", src: '/websites/real6.png' },
    { type: "image", src: '/websites/real7.png' },
    { type: "image", src: '/websites/real9.png' },
    { type: "image", src: '/websites/real10.png' },
  ],
  images: [
    '/websites/real1.png',
    '/websites/real2.png',
    '/websites/real3.png',
    '/websites/real4.png',
    '/websites/real5.png',
    '/websites/real6.png',
    '/websites/real7.png',
    '/websites/real9.png',
    '/websites/real10.png',
    // "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    // 'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=800',
    //  'https://images.pexels.com/photos/4162494/pexels-photo-4162494.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   'https://images.pexels.com/photos/3768905/pexels-photo-3768905.jpeg?auto=compress&cs=tinysrgb&w=800',
    // "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800",
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
  websiteLink:"https://real-madrid-website.vercel.app/",
  githubLink:"https://github.com/DionisisChytiris/RealMadridWebsite"
};

function RealMadridFC() {
  return (
    <div>
      <div className="h-auto bg-gray-200 dark:bg-gray-700 px-4 sm:px-8 md:px-16 lg:px-22  py-8">
         <div className="fixed top-[130px] md:top-[100px] right-4 md:right-10 rounded-xl bg-gray-500/80 text-white text-right text-[12px] md:text-[14px] py-2 px-4 z-50">
           Real Madrid FC Website
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

export default RealMadridFC
