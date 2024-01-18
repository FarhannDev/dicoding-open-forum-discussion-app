/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // KODE INI UNTUK SETTING TEMA PERANGKAT
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme-dicoding-open-discussion') || 'light'
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      // mendapatkan nilai tema baru berdasarkan state sebelumnya
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      // menyimpan nilai tema baru ke local storage
      localStorage.setItem('theme-dicoding-open-discussion', newTheme);
      // mengembalikan state dengan nilai theme terbaru.
      return newTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
