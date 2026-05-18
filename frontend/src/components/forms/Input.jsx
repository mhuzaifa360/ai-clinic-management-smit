import Typography from "../common/Typography";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  error,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">

      {label && (
        <Typography variant="small">
          {label}
        </Typography>
      )}

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-3 py-2 rounded-lg border outline-none 
        bg-white dark:bg-gray-800 text-gray-800 dark:text-white
        ${error ? "border-red-500" : "border-gray-300 dark:border-gray-700"}
        focus:border-blue-500`}
      />

      {error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}

    </div>
  );
};

export default Input;   