import React from "react";
import {
  InputGroup,
  FormControl,
  Image,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";
import Addvertise from "./Addvertise";
import Box from "./Box";

const RightSidebar = () => {
  return (
    <div>
      <Box>
        <InputGroup>
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <button id="button-addon2">
            <i class="fas fa-search"></i>
          </button>
        </InputGroup>
      </Box>

      <Box>
        <Addvertise
          title="Addvertise 3"
          image="https://via.placeholder.com/500x500"
        />
      </Box>

      <Box title="Most viewed Posts">
        <ListGroup as="ul">
          <div className="border-start border-end border-bottom my-1">
            <div>
              <Image
                src="https://via.placeholder.com/500x300"
                alt=""
                fluid
                className="w-100"
              />
            </div>
            <div className="p-3">
              <h6>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Itaque, quibusdam.
              </h6>
            </div>
          </div>
        </ListGroup>
      </Box>

      <Box title="Tags">
        <div class="tags p-2 border">
          <Row className="mx-0">
            <Col sm={6} className="border">
              <a href="#">Himel</a>
            </Col>
            <Col sm={6} className="border">
              <a href="#">Himel</a>
            </Col>
            <Col sm={6} className="border">
              <a href="#">Himel</a>
            </Col>
            <Col sm={6} className="border">
              <a href="#">Himel</a>
            </Col>
          </Row>
        </div>
      </Box>

      <Box>
        <Addvertise
          title="Addvertise 5"
          image="https://via.placeholder.com/500x500"
        />
      </Box>
    </div>
  );
};

export default RightSidebar;
