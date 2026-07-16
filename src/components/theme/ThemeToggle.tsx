'use client';

import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-10 h-10 flex items-center justify-center rounded-full text-muted hover:text-foreground hover:bg-foreground/5 transition-colors cursor-pointer">
      {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}
