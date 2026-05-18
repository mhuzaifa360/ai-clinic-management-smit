import { useTheme } from "../context/ThemeContext";

const AdminLayout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">

      {/* SIDEBAR */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg p-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          AI Clinic
        </h1>

        <nav className="mt-6 flex flex-col gap-3 text-gray-600 dark:text-gray-300">
          <a href="/admin">Dashboard</a>
          <a href="/admin/patients">Patients</a>
          <a href="/admin/doctors">Doctors</a>
          <a href="/admin/analytics">Analytics</a>
        </nav>
      </div>

      {/* MAIN AREA */}
      <div className="flex flex-col flex-1">

        {/* TOPBAR */}
        <div className="h-14 bg-white dark:bg-gray-800 shadow flex items-center justify-between px-4">

          <h2 className="text-gray-800 dark:text-white font-semibold">
            Admin Dashboard
          </h2>

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>

        </div>

        {/* CONTENT */}
        <div className="p-4 overflow-y-auto">
          {children}
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;