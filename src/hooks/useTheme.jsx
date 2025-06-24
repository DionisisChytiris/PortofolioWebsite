// src/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // const [theme, setTheme] = useState(() => {
  //   const saved = localStorage.getItem("theme");
  //   if (saved) return saved;
  //   return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  // });

  // useEffect(() => {
  //   const root = document.documentElement;
  //   root.classList.remove("light", "dark");
  //   const actualTheme =
  //   theme === "system"
  //   ? window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ? "dark"
  //   : "light"
  //   : theme;
  //   root.classList.add(actualTheme);
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  const [theme, setTheme] = useState("system");
  
  useEffect(() => {
  const root = document.documentElement;

  // Always use system theme on initial load
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const actualTheme = theme === "dark" || (theme === "system" && systemPrefersDark)
    ? "dark"
    : "light";

  root.classList.remove("light", "dark");
  root.classList.add(actualTheme);
}, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme= () => useContext(ThemeContext);
