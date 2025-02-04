import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../assets/profile.jpg";
import "../App.css";

class Introduction extends Component {
  render() {
    return (
      <section id="introduction" className="bg-light">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h3 className="left-align">Hello, I'm</h3>
              <h1 className="left-align">Josephine Celine Tjandra</h1>
              <p className="left-align">
                Intern at Digital Church Office | Computer Science @ NUS
              </p>
            </Col>
            <Col md={4}>
              <img src={profilePic} className="img-fluid oval-image"></img>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Introduction;
