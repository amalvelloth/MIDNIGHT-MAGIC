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
    <div className="contact-container w-100">
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
          <a href="">Home</a>
        </li>
        <LiaGreaterThanSolid />
        <li>
          Contact-us
        </li>
      </ul>
      <div className="custom-row">
        <div className="get-in-touch col-md-5 p-5">
          <h1>Get in touch</h1>
          <p>
            We are eager to hear from you and assist with your event needs.
            Please feel free to get in touch with us through any of the
            following methods.
          </p>
        </div>
        <div className="lets-connect col-md-7 p-5">
          <h1>Let's Connect</h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
