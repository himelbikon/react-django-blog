import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

import Box from "./Box";
import Addvertise from "./Addvertise";

const LeftSidebar = () => {
  return (
    <div>
      <Box title="Categories">
        <ListGroup as="ul">
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            Porta ac consectetur ac
            <span className="badge bg-primary rounded-pill">1</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            Porta ac consectetur ac
            <span className="badge bg-primary rounded-pill">1</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            Porta ac consectetur ac
            <span className="badge bg-primary rounded-pill">1</span>
          </ListGroup.Item>
        </ListGroup>
      </Box>

      <Box title="Most Viewed Posts">
        <ListGroup>
          <Link to="post/12">
            <ListGroup.Item className="p-4">
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-2">List group item heading</h6>
                <small>3 days ago</small>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                quo doloribus nostrum pariatur unde consequatur, dignissimos
                ametem obcaecati animi?
              </p>
            </ListGroup.Item>
          </Link>
        </ListGroup>
      </Box>

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
