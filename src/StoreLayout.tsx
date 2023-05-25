import React from "react";
import { Link, Outlet } from "react-router-dom";

const StoreLayout = () => {
  return (
    <>
      <Link to="/store">Store home</Link>
      <br></br>
      <Link to="/store/1">Item 1</Link>
      <br></br>
      <Link to="/store/2">Item 2</Link>
      <Outlet context={{ hello: "world" }} />
    </>
  );
};

export default StoreLayout;
