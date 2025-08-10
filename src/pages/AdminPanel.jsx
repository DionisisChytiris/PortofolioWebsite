import ProjectGallery from "./templates/projectGallery";
import ProjectHeader from "./templates/ProjectHeader";
import Features from "./templates/Features";
import Challenges from "./templates/Challenges";
import ProjectInfo from "./templates/ProjectInfo";
import Technologies from "./templates/Technologies";

const project = {
  photo: "adminPanel.png",
  title: "Admin Panel Website",
  category: "Web Project",
  opacity: false,
  technologies: ["React", "Vite", "axios"],
  languages: ["JavaScript", "Typescript", "CSS"],
  fullDescription:
    "This admin panel is a web application built with React and Vite that allows centralized management of user messages from two mobile apps and their promotional websites. Powered by a Node.js backend using Express and NestJS, it connects to both MongoDB and PostgreSQL databases, supports real-time and email notifications, and offers a responsive UI for efficient message handling and replies.",
  media: [
    { type: "image", src: "/websites/porto.png" },
    { type: "video", src: "/websites/adminVideo1.mp4" },
    { type: "image", src: "/websites/porto1.png" },
    { type: "image", src: "/websites/porto2.png" },
    { type: "image", src: "/websites/porto3.png" },
    { type: "image", src: "/websites/porto4.png" },

    // { type: "video",
    // src: "quizVid2.mp4" },
  ],
  images: [
    "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4162494/pexels-photo-4162494.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3768905/pexels-photo-3768905.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800",
  ],
  features: [
    "Centralized inbox for all projects",
    "Real-time message updates with notifications",
    "Email notifications for new messages",
    "Responsive React + Vite UI",
    "Built with Node.js, Express, and NestJS backend",
    "Integrated with MongoDB and PostgreSQL",
    "Message filtering and search capabilities",
    "User message tagging and status updates",
    "Quick reply system and threaded responses",
  ],
  challenges: [
    "Handling multiple data sources (MongoDB & PostgreSQL)",
    "Implementing real-time updates and notifications",
    "Designing a clear and intuitive admin interface",
    "Ensuring secure backend communication",
    "Managing message consistency across multiple apps",
    "Scalable architecture for growing user base",
  ],
   typeofProject:"Project",
  websiteLink: "https://greek-geography-admin-page.vercel.app/",
  githubLink: "https://github.com/DionisisChytiris/GreekGeographyAdminPage",
};

function AdminPanel() {
  return (
    <div>
      <div className="h-auto bg-gray-200 dark:bg-gray-700 px-4 sm:px-8 md:px-16 lg:px-22  py-8">
        <div className="fixed top-[130px] md:top-[100px] right-4 md:right-10 rounded-xl bg-gray-500/80 text-white text-right text-[12px] md:text-[14px] py-2 px-4 z-50">
          Administration Panel
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8 ">
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

export default AdminPanel;
