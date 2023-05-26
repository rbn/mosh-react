import React from "react";
import { Outlet } from "react-router-dom";

const EventWizard = () => {
  return (
    <>
      {/* <div className="border-b border-gray-200 pb-5">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Events
        </h3>
      </div> */}
      <Outlet></Outlet>
    </>
  );
};

export default EventWizard;
