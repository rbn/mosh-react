import React, { useContext } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

const Store = () => {
  const { id } = useParams();
  const obj = useOutletContext();
  return (
    <>
      <div className="p-6 bg-slate-500 text-slate-50 font-bold">
        Store ... {obj.hello}
      </div>
    </>
  );
};

export default Store;
