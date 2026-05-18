import Typography from "../common/Typography";

const StatCard = ({
  title,
  value,
  icon,
  color = "blue",
  className = "",
}) => {
  const colors = {
    blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600",
    green: "bg-green-50 dark:bg-green-900/20 text-green-600",
    red: "bg-red-50 dark:bg-red-900/20 text-red-600",
    purple: "bg-purple-50 dark:bg-purple-900/20 text-purple-600",
    gray: "bg-gray-50 dark:bg-gray-800 text-gray-600",
  };

  return (
    <div
      className={`p-4 rounded-xl shadow bg-white dark:bg-gray-800 flex items-center justify-between ${className}`}
    >
      {/* LEFT SIDE TEXT */}
      <div>
        <Typography variant="small">
          {title}
        </Typography>

        <Typography variant="h2">
          {value}
        </Typography>
      </div>

      {/* ICON BOX */}
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-lg ${colors[color]}`}
      >
        {icon}
      </div>
    </div>
  );
};

export default StatCard;