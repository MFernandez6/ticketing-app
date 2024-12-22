import React from "react";

const ProgressBar = () => {
  return (
    <div className="w-full bg-gray-200 roundeded-full h-2.5">
      <div
        className="bg-blue-500 h-2.5 rounded-full"
        style={{ width: "75%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
