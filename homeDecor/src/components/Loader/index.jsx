import "../Loader/loader.css";
import { RotatingTriangles } from "react-loader-spinner";
import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
    </div>
  );
};

export default Loader;
