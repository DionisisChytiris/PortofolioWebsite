import ProjectGallery from "./templates/projectGallery";
import ProjectHeader from "./templates/ProjectHeader";
import Features from "./templates/Features";
import Challenges from "./templates/Challenges";
import ProjectInfo from "./templates/ProjectInfo";
import Technologies from "./templates/Technologies";

const project = {
  photo: "/aiagent/aiagent1.jpg",
  title: "FastAPI Ai Agent Geography",
  category: "API Project",
  opacity: false,
  technologies: ["Python", "FastAPI", "LangChain", "Docker"],
  languages: ["Python"],
  fullDescription:
    "A Python-based FastAPI application powered by LangChain and OpenAI that acts as an intelligent AI agent. Users can ask geography-related questions, and the agent provides accurate, context-aware answers focused solely on geographic topics. The app enforces daily usage limits per user and is designed for seamless integration with modern frontends.",
  media: [
    { type: "video", src: "/aiagent/aivideo1.mp4" },
    { type: "image", src: "/aiagent/aiagent1.jpg" },
    { type: "image", src: "/aiagent/ai2.jpg" },
    { type: "image", src: "/aiagent/ai3.jpg" },
    { type: "image", src: "/aiagent/ai4.jpg" },
    { type: "image", src: "/aiagent/ai5.jpg" },

    // { type: "image", src: "/websites/trivia4.png" },
    // { type: "image", src: "/websites/trivia6.png" },
    // { type: "image", src: "/websites/trivia5.png" },
    // { type: "image", src: "/websites/trivia2.png" },
  ],
  images: [
    "/api.png",
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
    "Built with FastAPI and Python: Lightweight, high-performance backend",
    "LangChain-Powered AI: Handles geography questions with precision",
    "OpenAI GPT Integration: Delivers intelligent and contextual responses",
    "Daily Usage Limits: Prevents API abuse with per-user quotas",
    "In-Memory State Tracking: No database required — resets on restart",
    "CORS Support: Smooth integration with web or mobile frontends",
    "Simple API Structure: Accepts {userId, question} in POST requests",
    "Docker-Ready Deployment: Easy to run locally or in the cloud",
  ],
  challenges: [
    "Ensuring the AI only answers geography-related questions",
    "Implementing accurate daily rate limiting per user",
    "Optimizing LangChain + OpenAI calls for speed",
    "Handling varied question formats from users",
    "Allowing easy integration with different frontend platforms",
  ],
  typeofProject: "API",
  websiteLink: "https://geography-ai-agent.vercel.app/",
  githubLink: "https://github.com/DionisisChytiris/GeographyAiAgent",
};

function FastAiAgentGeography() {
  return (
    <div>
      <div className="h-auto bg-gray-200 dark:bg-gray-700 px-4 sm:px-8 md:px-16 lg:px-22  py-8">
        <div className="fixed top-[130px] md:top-[100px] right-4 md:right-10 rounded-xl bg-gray-500/80 text-white text-right text-[12px] md:text-[14px] py-2 px-4 z-50">
          FastAPI Ai Agent Geography
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

export default FastAiAgentGeography;
