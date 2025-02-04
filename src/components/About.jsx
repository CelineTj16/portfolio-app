import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

class About extends Component {
  render() {
    return (
      <section id="about">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h2>About me</h2>
              <p className="justify-text fs-6">
                Welcome to my personal website! I'm currently a Year 1 Student
                at NUS, studying Computer Science at the National University of
                Singapore.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default About;
