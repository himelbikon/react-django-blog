import axios from "axios";
import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import Box from "./Box";

export default class CategoriesBox extends Component {
  constructor() {
    super();
    this.state = { categories: [] };

    this.get_categories = async () => {
      //   console.log("getting blog");
      await axios
        .get("/api/blog/categories/")
        .then((response) => {
          this.setState({ categories: response.data });
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
          console.log("Got site error");
          if (error.response.data) {
            for (const property in error.response.data) {
              console.log(
                JSON.stringify(`${property}: ${error.response.data[property]}`)
              );
            }
          }
        });
    };
  }

  componentDidMount() {
    this.get_categories();
  }
  render() {
    return (
      <div>
        <Box title="Categories">
          <ListGroup as="ul">
            {this.state.categories.map((category) => (
              <ListGroup.Item
                key={category.id}
                className="d-flex justify-content-between align-items-center"
              >
                {category.name}
                <span className="badge bg-primary rounded-pill">
                  {category.length}
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Box>
      </div>
    );
  }
}
