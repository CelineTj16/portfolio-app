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
                Welcome to my personal website! I'm a Year 1 Student at NUS.
                Recently, I've been diving into web development. However, beyond
                web development, I have experience in data visualisation and
                analysis. Outside of coding, I enjoy crocheting and I've
                recently gotten into gymming too!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default About;
