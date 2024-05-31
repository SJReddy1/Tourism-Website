import React from "react";
import Testimonial from './Testimonial';
import "./Testimonials.css";
import "../App_copy.css";

import { Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components

const Testimonials = () => {
  return (
    <div className="cta" data-aos-duration="2000">
      <Container>
        <Row>
          <Col className="text-center">
            <h2 className="section_title commn-heading">
              <span className="yellow-shape">Testimonials</span>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Testimonial/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
