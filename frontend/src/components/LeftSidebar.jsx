import React from "react";
// import { Link } from "react-router-dom";
// import { ListGroup } from "react-bootstrap";

import Box from "./Box";
import Addvertise from "./Addvertise";
import CategoriesBox from "./CategoriesBox";
import RandomPosts from "./RandomPosts";

const LeftSidebar = () => {
  return (
    <div>
      <CategoriesBox />

      <RandomPosts />

      <Box>
        <Addvertise
          title="Addvertise 1"
          image="https://via.placeholder.com/500x500"
        />
      </Box>

      <Box>
        <Addvertise
          title="Addvertise 2"
          image="https://via.placeholder.com/500x500"
        />
      </Box>
    </div>
  );
};

export default LeftSidebar;
