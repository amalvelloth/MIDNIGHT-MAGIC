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

      <section>
        <div className="custom-row">
          <div className="get-in-touch col-md-5">
            <div className="bg-color-gray p-4 p-md-5 p-sm-5 ">
              <h1>Get in touch</h1>
              <p>
                We are eager to hear from you and assist with your event needs.
                Please feel free to get in touch with us through any of the
                following methods.
              </p>
              <div className="get-in-touch_details">
                <div className="get-in-touch_details-icon d-flex align-items-center">
                  <div>
                    <h4>Phone</h4>
                    <p>8281578305, 8304930045</p>
                  </div>
                </div>
                <div className="get-in-touch_details-icon">
                  <div>
                    <h4>Email</h4>
                    <p>info@midnightmagic.co.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lets-connect col-md-7 col-sm-12 col px-3">
            <form class="form">
              <div className="d-flex mb-3">
                <h1>Let's Connect</h1>
              </div>
              <div class="flex">
                <label className="flex-item">
                  <input class="input" type="text" placeholder="" required="" />
                  <span>Firstname</span>
                </label>

                <label className="flex-item">
                  <input class="input" type="text" placeholder="" required="" />
                  <span>Lastname</span>
                </label>
              </div>
              <div class="flex">
                <label className="flex-item">
                  <input class="input" type="text" placeholder="" required="" />
                  <span>Email</span>
                </label>

                <label className="flex-item">
                  <select class="input" required>
                    <option value="" disabled selected>
                      Select your country
                    </option>
                    <option value="USA">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Canada">India</option>
                  </select>

                  <span>Country</span>
                </label>
              </div>

              <label>
                <input class="input" type="email" placeholder="" required="" />
                <span>Address</span>
              </label>

              <label>
                <input
                  class="input"
                  type="password"
                  placeholder=""
                  required=""
                />
                <span>Messege</span>
              </label>
              <div className="d-flex">
                <button className="message-btn">
                  {" "}
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
