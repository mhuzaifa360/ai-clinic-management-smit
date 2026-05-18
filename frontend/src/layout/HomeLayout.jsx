const HomeLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">

      {/* TOP BAR */}
      <div className="h-14 bg-white dark:bg-gray-800 shadow flex items-center px-4">
        <h1 className="font-bold text-blue-600">
          AI Clinic System
        </h1>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {children}
      </div>

    </div>
  );
};

export default HomeLayout;