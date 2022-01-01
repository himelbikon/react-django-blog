import React from "react";
import Title from "./Title";

const Box = ({ children, title }) => {
  return (
    <div className="box">
      {title ? <Title title={title} /> : null}
      {children}
    </div>
  );
};

export default Box;
