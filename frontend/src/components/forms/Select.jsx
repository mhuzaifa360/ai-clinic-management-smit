import Typography from "../common/Typography";

const Select = ({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">

      {label && (
        <Typography variant="small">
          {label}
        </Typography>
      )}

      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`px-3 py-2 rounded-lg border outline-none 
        bg-white dark:bg-gray-800 text-gray-800 dark:text-white
        ${error ? "border-red-500" : "border-gray-300 dark:border-gray-700"}
        focus:border-blue-500`}
      >
        <option value="">Select</option>

        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}

    </div>
  );
};

export default Select;