import { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
      />

      {/* MODAL BOX */}
      <div className="relative w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">

          <h2 className="text-lg font-bold text-gray-800 dark:text-white">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500"
          >
            ✖
          </button>

        </div>

        {/* CONTENT */}
        <div>{children}</div>

      </div>

    </div>
  );
};

export default Modal;