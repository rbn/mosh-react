import React from "react";

interface Props {
  children?: string;
  color?: string;
  onClick?: () => void;
}

const Button = ({ children, color = "blue", onClick }) => {
  return (
    <button
      className={`bg-${color} hover:bg-sky text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
