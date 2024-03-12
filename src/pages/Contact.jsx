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
      <div className="container-s">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <LiaGreaterThanSolid />
          </li>
          <li>Contact-us</li>
        </ul>
      </div>

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
                <div className="get-in-touch_details-icon">
                  <a href="tel:8281578305">
                    <span>
                      <svg
                        width="15"
                        height="22"
                        viewBox="0 0 15 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="svg-convert svg-converted"
                      >
                        <path
                          d="M14.7813 19.5098L13.1708 16.1106C12.8241 15.3843 12.3761 14.8558 11.6025 15.1781L10.0765 15.7539C8.8548 16.3298 8.24609 15.7539 7.63314 14.8859L4.88546 8.53009C4.53883 7.80384 4.7206 7.12057 5.49418 6.79827L7.62891 5.93021C8.40249 5.60361 8.2799 4.92463 7.93327 4.19838L6.1029 0.734728C5.75627 0.00847848 5.0461 -0.167712 4.27252 0.154588C2.72537 0.803485 1.44452 1.82195 0.611766 3.33032C-0.402762 5.17388 0.104502 7.73938 0.307408 8.81802C0.510313 9.89665 1.22048 11.7875 2.13778 13.7256C3.05509 15.668 3.85825 17.1935 4.5811 18.0573C5.29973 18.9211 7.02443 21.2846 9.15916 21.8132C10.9092 22.2429 12.7988 21.8819 14.3459 21.233C15.1237 20.9236 15.1237 20.2403 14.7813 19.5098Z"
                          fill="aquamarine"
                        ></path>
                      </svg>
                    </span>
                    <div>
                      <h4>Phone</h4>
                      <p>8281578305, 8304930045</p>
                    </div>
                  </a>
                </div>
                <div className="get-in-touch_details-icon">
                  <a href="mailto:info@midnightmagic.co.in">
                    <span>
                      <svg
                        width="22"
                        height="18"
                        viewBox="0 0 22 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="svg-convert svg-converted"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22 2.47985V17.064L16.6815 9.95122L15.6708 10.8166L21.0411 18H0.958879L6.32916 10.8166L5.31851 9.95122L0 17.064V2.47984L10.9994 12.6858L22 2.47985ZM21.9992 0V0.645225L10.9999 10.8512L0.000515625 0.645237V0H21.9992Z"
                          fill="aquamarine"
                        ></path>
                      </svg>
                    </span>
                    <div>
                      <h4>Email</h4>
                      <p>info@midnightmagic.co.in</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="get-in-touch_social">
                <h6>Follow Us</h6>
                <ul className="social_links p-0">
                  <li className="social_links-item">
                    <a className="social_links-link" href=""></a>
                  </li>
                  <li className="social_links-item">
                    <a className="social_links-link" href=""></a>
                  </li>
                  <li className="social_links-item">
                    <a className="social_links-link" href=""></a>
                  </li>
                </ul>
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
