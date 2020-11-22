import React, { Fragment } from "react";
import spinner from "./Spinner-1.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='Loading...'
        style={{ margin: "auto", display: "block", width: "200px" }}
      ></img>
    </Fragment>
  );
};

export default Spinner;
