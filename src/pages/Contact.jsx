import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import nightPartyImage1 from "../assets/night_party_event1.jpg";
import nightPartyImage2 from "../assets/night_party_event2.jpg";
import nightPartyImage3 from "../assets/night_party_event3.jpg";
import "./Contact.css";
import { LiaGreaterThanSolid } from "react-icons/lia";


function Contact() {
  return (
    <div className="contact-container">
      <div className="hero-image">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={nightPartyImage1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={nightPartyImage2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={nightPartyImage3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="title-container">
          <h1>Contact Us</h1>
        </div>
      </div>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <LiaGreaterThanSolid />
        </li>
        <li>Contact-us</li>
      </ul>

      <div className="custom-row">
        <div className="get-in-touch col-md-5">
          <div className="bg-color-gray">
            <h2>Get in touch</h2>
            <p>
              We are eager to hear from you and assist with your event needs.
              Please feel free to get in touch with us through any of the
              following methods.
            </p>
            <div className="get-in-touch_details">
              <div className="get-in-touch_details-icon d-flex align-items-center">
                <div>
                  <h4>Phone</h4>
                  <p>+9999999999</p>
                </div>
              </div>
              <div className="get-in-touch_details-icon">
                <div>
                  <h4>Email</h4>
                  <p>contact@ssss.com</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="lets-connect col-md-7 p-5">
          <h2>Let's Connect</h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
