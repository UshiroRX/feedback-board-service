import { NavLink, Outlet } from "react-router";
import { ThemeToggle } from "../../../shared/ui/theme-toggle";

export const FeedbackLayout = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition px-2 py-1 border-b-2 text-sm sm:text-base font-medium ${
      isActive
        ? "border-blue-600 text-blue-600 dark:text-white"
        : "border-transparent text-gray-700 hover:text-blue-600 dark:text-gray-300"
    }`;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col">
      <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <NavLink to="/create" className={linkClasses}>
                Предложить улучшение
              </NavLink>
              <NavLink to="/my" className={linkClasses}>
                Мои предложения
              </NavLink>
              <NavLink to="/list" className={linkClasses}>
                Все предложения
              </NavLink>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};
