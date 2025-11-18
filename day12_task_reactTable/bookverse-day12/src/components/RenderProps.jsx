import React from "react";

const RenderProps = ({ render }) => {
  return <div>{render()}</div>;
};

export default RenderProps;
