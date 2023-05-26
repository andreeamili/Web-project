import React from "react";
import "./Loader.css";
import  loadingPhoto from './pictures/loading.png';
import ReactDOM from "react-dom";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={loadingPhoto} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;