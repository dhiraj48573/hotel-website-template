import React, { createContext, useContext, useState, useEffect } from 'react';
import { propertyConfig } from '../config/property.config';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Theme state ('theme-a' | 'theme-b' | 'theme-c')
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('site_theme') || propertyConfig.property.theme || 'theme-a';
  });

  // Mode state ('hotel' | 'dharamshala' | 'hybrid')
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('site_mode') || propertyConfig.property.mode || 'hybrid';
  });

  useEffect(() => {
    localStorage.setItem('site_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('site_mode', mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
