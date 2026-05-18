const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) => {
  const base =
    "px-4 py-2 rounded-lg font-medium transition duration-200";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white",
    danger:
      "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;