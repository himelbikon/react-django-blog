import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import LeftSidebar from "../components/LeftSidebar";

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={12} lg={9}>
            <Row className="first-two-column">
              <Col lg={4}>
                <LeftSidebar />
              </Col>
              <Col className="bg-success" lg={8}>
                Column Middle
              </Col>
            </Row>
          </Col>
          <Col className="bg-success" sm={12} lg={3}>
            Column Right
          </Col>
        </Row>
      </div>
    );
  }
}
