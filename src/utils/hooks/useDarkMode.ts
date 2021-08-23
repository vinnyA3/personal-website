import { useState, useEffect } from 'react';

export default function useDarkMode() {
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const [mode, setMode] = useState(() => {
    const localColorMode = window.localStorage.getItem('colorMode') ||
      (window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light');

    return localColorMode;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => setMode(mediaQuery.matches ? 'dark' : 'light');
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('colorMode', mode);
  }, [mode]);
  return [mode, setMode];
}
