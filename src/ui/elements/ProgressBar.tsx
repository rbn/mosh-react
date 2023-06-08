import React from "react";

const ProgressBar = ({ styles }) => {
  console.log(styles);
  return (
    <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
      <div className="h-1 bg-blue-500" style={styles}></div>
    </div>
  );
};

export default ProgressBar;
