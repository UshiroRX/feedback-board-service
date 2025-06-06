import { NavLink, Outlet } from "react-router";

export const FeedbackLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-white shadow-md">
        <ul className="flex space-x-6 px-6 py-4 text-gray-700 font-medium text-lg">
          <li>
            <NavLink
              to="/create"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-600 transition"
              }
            >
              💡 Предложить
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/list"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-600 transition"
              }
            >
              📋 Мои предложения
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Контент */}
      <main className="flex-1 px-4 py-6 max-w-4xl mx-auto w-full">
        <Outlet />
      </main>
    </div>
  );
};
