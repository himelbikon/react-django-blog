import React from "react";
import { useParams } from "react-router-dom";

const PostScreen = () => {
  const p = useParams();
  return (
    <div>
      <h4>Test: {JSON.stringify(p)} </h4>
    </div>
  );
};

export default PostScreen;
