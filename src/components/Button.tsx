import React from "react";

interface Props {
  children: string;
  color?: "primary" | "purple";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }) => {
  return (
    <button
      className={
        "bg-blue hover:bg-" +
        color +
        " text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
