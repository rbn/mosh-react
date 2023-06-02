import React from "react";

interface Props {
  children?: string;
  onClick?: () => void;
  style?: string;
  fontWeight?: string;
}

const Button = ({
  children,
  onClick,
  style = "rounded",
  fontWeight = "font-bold",
}) => {
  const styles = {
    underlined:
      "text-slate-500 background-transparent uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:underline",
    rounded: "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full",
  };

  const finalStyle = styles[style] + " " + fontWeight;

  return (
    <button className={finalStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
