// ThemeContext.tsx
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "sunny";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    // Add/remove a class on <html> or <body>
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "sunny" ? "nightlight" : "sunny"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
