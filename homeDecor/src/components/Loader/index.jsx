import "../Loader/loader.css";
import { Vortex} from "react-loader-spinner";
import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
};

export default Loader;
