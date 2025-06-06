import { useThemeStore } from "../model/theme-store";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="text-sm px-3 py-1 rounded border bg-white dark:bg-gray-800 dark:text-white"
    >
      {theme === "light" ? "🌙 Тёмная тема" : "☀️ Светлая тема"}
    </button>
  );
};
