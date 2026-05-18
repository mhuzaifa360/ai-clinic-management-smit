const Typography = ({
  children,
  variant = "p",
  className = "",
}) => {
  const styles = {
    h1: "text-3xl font-bold text-gray-900 dark:text-white",
    h2: "text-2xl font-semibold text-gray-900 dark:text-white",
    h3: "text-xl font-semibold text-gray-800 dark:text-white",
    p: "text-base text-gray-600 dark:text-gray-300",
    small: "text-sm text-gray-500 dark:text-gray-400",
  };

  const Tag = variant;

  return (
    <Tag className={`${styles[variant]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Typography;