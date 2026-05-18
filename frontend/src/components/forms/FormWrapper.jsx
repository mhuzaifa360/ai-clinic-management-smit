const FormWrapper = ({ title, children, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow flex flex-col gap-4"
    >
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">
        {title}
      </h2>

      {children}
    </form>
  );
};

export default FormWrapper;