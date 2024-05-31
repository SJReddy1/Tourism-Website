import React from "react";
import '../App_copy.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../images/Arabian Ark White.png";
import placeholder from "../images/placeholder.svg";
import phonecall from "../images/phone-call.svg";
import message from "../images/message.svg";
import planetearth from "../images/planet-earth.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          {/* Footer Column 1 */}
          <div className="col-lg-4 footer_column">
            <div className="footer_col pl-4">
              <div className="footer_content footer_about">
                <div className="logo_container footer_logo">
                  <div className="logo-footer">
                    <Link to="/">
                      <img src={logo} alt="logo-footer" />
                    </Link>
                  </div>
                </div>
                <p className="footer_about_text pl-2">
                  The best destination management company (DMC) in Dubai. Our
                  travel agency in Dubai which offers quality services to
                  customers.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Column 2 */}
          <div className="col-lg-2 footer_column">
            <div className="footer_col">
              <div className="footer_title">Quick Links</div>
              <div className="footer_content footer_contact">
                <ul
                  className="contact_info_list"
                  style={{ width: "100%", marginLeft: "-30px" }}
                >
                  <li className="contact_info_item d-flex flex-row">
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      className="mr-2"
                      style={{ color: "#fa9e1b" }}
                    />
                    <div className="contact_info_text">
                      <Link to="/">Home</Link>
                    </div>
                  </li>
                  <li className="contact_info_item d-flex flex-row">
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      className="mr-2"
                      style={{ color: "#fa9e1b" }}
                    />
                    <div className="contact_info_text">
                      <Link to="/about">About Us</Link>
                    </div>
                  </li>
                  <li className="contact_info_item d-flex flex-row">
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      className="mr-2"
                      style={{ color: "#fa9e1b" }}
                    />
                    <div className="contact_info_text">
                      <Link to="/">Services</Link>
                    </div>
                  </li>
                  <li className="contact_info_item d-flex flex-row">
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      className="mr-2"
                      style={{ color: "#fa9e1b" }}
                    />
                    <div className="contact_info_text">
                      <Link to="/">Testimonial</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Column 3 */}
          <div className="col-lg-3 footer_column">
            <div className="footer_col">
              <div className="footer_title">Contact Info</div>
              <div className="footer_content footer_contact">
                <ul
                  className="contact_info_list"
                  style={{
                    width: "100%",
                    marginLeft: "-30px",
                    fontSize: "small",
                  }}
                >
                  <li className="contact_info_item d-flex flex-row">
                    <div>
                      <div className="contact_info_icon">
                        <img src={placeholder} alt="placeholder" />
                      </div>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/DhVjD44fhWvn1YGh6"
                      target="_blank"
                    >
                      <div className="contact_info_text">
                        Office No. 46, Floor 20th Prime Tower,
                        <br />
                        Business Bay, Burj Khalifa District,
                        <br />
                        Dubai, UAE
                      </div>
                    </a>
                  </li>
                  <li className="contact_info_item d-flex flex-row">
                    <div>
                      <div className="contact_info_icon">
                        <img src={phonecall} alt="phone-call" />
                      </div>
                    </div>
                    <a href="tel:9130777631">
                      <div className="contact_info_text">+91-9130777631</div>
                    </a>
                  </li>
                  <li className="contact_info_item d-flex flex-row">
                    <div>
                      <div className="contact_info_icon">
                        <img src={message} alt="message" />
                      </div>
                    </div>
                    <div className="contact_info_text">
                      <a
                        href="mailto:dubai@arabianark.com?Subject=Arabian Ark"
                        target="_top"
                      >
                        dubai@arabianark.com
                      </a>
                    </div>
                  </li>
                  <li className="contact_info_item d-flex flex-row">
                    <div>
                      <div className="contact_info_icon">
                        <img src={planetearth} alt="planet-earth" />
                      </div>
                    </div>
                    <div className="contact_info_text">
                      <a
                        href="http://www.arabianark.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.arabianark.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Column 4 */}
          <div className="col-lg-3 footer_column">
            <div className="footer_col">
              <div className="footer_title">Follow Us</div>
              <div className="footer_content footer_tags">
                <ul
                  className="footer_social_list"
                  style={{ width: "100%", marginLeft: "-30px" }}
                >
                  <li className="footer_social_item">
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        style={{ color: "FFFFFF" }}
                      />
                    </a>
                  </li>
                  <li className="footer_social_item">
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faPinterest}
                        style={{ color: "FFFFFF" }}
                      />
                    </a>
                  </li>
                  <li className="footer_social_item">
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ color: "FFFFFF" }}
                      />
                    </a>
                  </li>
                  <li className="footer_social_item">
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ color: "FFFFFF" }}
                      />
                    </a>
                  </li>
                  <li className="footer_social_item">
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ color: "FFFFFF" }}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
