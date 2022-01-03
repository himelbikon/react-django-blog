import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

import Box from "./Box";

export default class RandomPosts extends Component {
  render() {
    return (
      <div>
        <Box title="Random Posts">
          <ListGroup>
            <Link to="post/12">
              <ListGroup.Item className="p-4">
                <div className="d-flex w-100 justify-content-between">
                  <h6 className="mb-2">List group item heading</h6>
                  <small>3 days ago</small>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus quo doloribus nostrum pariatur unde consequatur,
                  dignissimos ametem obcaecati animi?
                </p>
              </ListGroup.Item>
            </Link>
          </ListGroup>
        </Box>
      </div>
    );
  }
}
