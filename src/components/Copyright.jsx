import React from "react";
import { Link } from "react-router-dom";
import "../App_copy.css";

import { Container, Row, Col } from "react-bootstrap"; // Import necessary Bootstrap components

const Copyright = () => {
  return (
    <div className="copyright">
      <Container>
        <Row>
          <Col lg={3} className="order-lg-1 order-2">
            <div className="copyright_content d-flex flex-row align-items-center">
              <div>
                Copyright ©
                <script>{`document.write(new Date().getFullYear());`}</script>
                {`2024 All rights reserved`}
              </div>
            </div>
          </Col>
          <Col lg={9} className="order-lg-2 order-1">
            <div className="footer_nav_container d-flex flex-row align-items-center justify-content-lg-end">
              <div className="footer_nav">
                <ul className="footer_nav_list">
                  {/* <li className="footer_nav_item">
                      <a href="offers.html">Tour Packages</a>
                    </li> */}
                  <li className="footer_nav_item">
                    <Link to="/privacy">PRIVACY POLICY</Link>
                  </li>
                  <li className="footer_nav_item">
                    <Link to="/terms">Terms &amp; Conditions</Link>
                    
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Copyright;
