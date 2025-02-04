import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SoberGraphics from "../assets/sobergraphics.png";
import "../App.css";

class Projects extends Component {
  render() {
    return (
      <section id="projects" className="bg-light">
        <Container>
          <h2>My Projects</h2>
          <Row className="align-items-center">
            <Col md={6}>
              <Card className="p-3">
                <Card.Img variant="top" src={SoberGraphics}></Card.Img>
                <Card.Title> SoberGraphics.sg</Card.Title>
                <Card.Text>
                  An AI-powered platform to generate customised drug prevention
                  educational materials in multiple formats for DrugFreeSG
                  Champions (ambassadors of the Central Narcotics Bureau’s
                  anti-drug initiative). Achieved semi-finalist placement in
                  HacX 2024.
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Projects;
