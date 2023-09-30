"use client"
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('bg-[#1c1c1c]');

  const toggleMode = () => {
    setMode(mode === 'bg-[#1c1c1c]' ? 'bg-[#f1f1f1]' : 'bg-[#1c1c1c]');
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
