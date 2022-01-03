import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import LeftSidebar from "../components/LeftSidebar";
import MiddleBar from "../components/MiddleBar";
import RightSidebar from "../components/RightSidebar";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={12} lg={9}>
            <Row className="first-two-column">
              <Col lg={4}>
                <LeftSidebar />
              </Col>
              <Col lg={8}>
                <MiddleBar />
              </Col>
            </Row>
          </Col>
          <Col sm={12} lg={3}>
            <RightSidebar />
          </Col>
        </Row>
      </div>
    );
  }
}
