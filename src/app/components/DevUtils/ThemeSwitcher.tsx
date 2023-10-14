"use client"; //
import React, { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const [mode, setMode] = useState<"dark" | "light">("light");

  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
  };

  function toggleBodyThemeClass(showInDarkMode: boolean) {
    if (showInDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }

  useEffect(() => {
    const showInDarkMode = mode === "dark";
    toggleBodyThemeClass(showInDarkMode);
  }, [mode]);

  return (
    <button
      className="p-4 bg-gray-100 text-black dark:bg-gray-800 dark:text-white absolute bottom-0 right-0"
      onClick={toggleMode}
    >
      Switch to {mode === "dark" ? "☀️ Light" : "🌙 Dark"} mode
    </button>
  );
};
