import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

import Box from "./Box";
import axios from "axios";

export default class RandomPosts extends Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
    };

    this.get_blogs = async () => {
      await axios
        .get("/api/blog/showcase/?type=random")
        .then((response) => {
          this.setState({ blogs: response.data });
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
          if (error.response) {
            for (const property in error.response.data) {
              console.log(
                JSON.stringify(`${property}: ${error.response.data[property]}`)
              );
            }
          }
        });

      // console.log(this.state.blogs, "asasasas");
    };
  }

  componentDidMount() {
    this.get_blogs();
  }

  render() {
    return (
      <div>
        <Box title="Random Posts">
          <ListGroup>
            {this.state.blogs.map((blog) => (
              <Link to={`/post/${blog.id}`} key={blog.id}>
                <ListGroup.Item className="p-4">
                  <div className="d-flex w-100 justify-content-between">
                    <h6 className="mb-2 w-75">{blog.title}</h6>
                    <small>{blog.ago}</small>
                  </div>

                  <small>{blog.details.slice(0, 200)}...</small>
                </ListGroup.Item>
              </Link>
            ))}
          </ListGroup>
        </Box>
      </div>
    );
  }
}
