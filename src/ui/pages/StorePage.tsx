import React from "react";
import { Outlet } from "react-router-dom";

const StorePage = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default StorePage;
