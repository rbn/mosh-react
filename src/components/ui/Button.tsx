import React from "react";

interface Props {
  children?: string;
  onClick?: () => void;
}

const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-sky-900 hover:bg-slate-600 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
