import React from "react";

export enum Style {
  underlined = "text-slate-500 background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:underline",
  rounded = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",
}

interface Props {
  children?: string;
  onClick?: () => void;
  style: Style;
}

const Button = ({ children, onClick, style = Style.rounded }) => {
  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
