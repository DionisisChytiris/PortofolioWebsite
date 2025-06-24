import { useState } from "react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

const modeLabels = {
  light: { label: "Light", icon: <FaSun className="mr-2 text-yellow-400" /> },
  dark: { label: "Dark", icon: <FaMoon className="mr-2 text-blue-400" /> },
  system: { label: "System", icon: <FaDesktop className="mr-2 text-gray-500" /> },
};

function ThemeDropdown({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const modes = ["light", "dark", "system"];

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center px-2 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
      >
        {modeLabels[theme].icon}
        {/* {modeLabels[theme].label} */}
        <svg
          className="ml-0 sm:ml-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40  rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {modes.map((mode) => (
              <button
                key={mode}
                onClick={() => {
                  setTheme(mode);
                  setOpen(false);
                }}
                className={`w-full flex items-center px-4 py-4 text-sm text-left ${
                  theme === mode
                    ? "font-bold text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {modeLabels[mode].icon}
                {modeLabels[mode].label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeDropdown;



// import { useState } from "react";

// function ThemeDropdown({ theme, setTheme }) {
//   const [open, setOpen] = useState(false);

//   const modes = ["light", "dark", "system"];

//   return (
//     <div className="relative inline-block text-left">
//       <button
//         onClick={() => setOpen(!open)}
//         className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-black dark:text-white bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
//       >
//         {theme.charAt(0).toUpperCase() + theme.slice(1)}
//         <svg
//           className="ml-2 h-4 w-4"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z" clipRule="evenodd" />
//         </svg>
//       </button>

//       {open && (
//         <div className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
//           <div className="py-1">
//             {modes.map((mode) => (
//               <button
//                 key={mode}
//                 onClick={() => {
//                   setTheme(mode);
//                   setOpen(false);
//                 }}
//                 className={`block px-4 py-2 text-sm w-full text-left ${
//                   theme === mode
//                     ? "font-bold text-blue-600 dark:text-blue-400"
//                     : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//                 }`}
//               >
//                 {mode.charAt(0).toUpperCase() + mode.slice(1)}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ThemeDropdown;
