import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../App.css";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <Container>
          <h2>Let's get in touch!</h2>
          <Row>
            <Col>
              <div className="d-flex flex-column">
                <a href="https://www.linkedin.com/in/josephinecelinetj/">
                  <FaLinkedin size={30} color="#0077b5" className="me-2" />
                  <span className="fw-bold text-primary">
                    linkedin.com/in/josephinecelinetj/
                  </span>
                </a>
                <a href="https://github.com/CelineTj16">
                  <FaGithub size={30} color="#0077b5" className="me-2" />
                  <span className="fw-bold text-primary">
                    github.com/CelineTj16
                  </span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Contact;
