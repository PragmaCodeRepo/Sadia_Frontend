import React from "react";
import axios from "axios";

const AxiosTest = () => {
  const fetchnews = () => {
    console.log("ok");
    axios.get("http://192.241.128.245/api/Profiles/").then((response) => {
      setInterval(response.data);
    });
  };
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={fetchnews}>
              fetch news
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AxiosTest;
