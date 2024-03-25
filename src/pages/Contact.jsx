import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import nightPartyImage1 from "../assets/night_party_event1.jpg";
import nightPartyImage2 from "../assets/night_party_event2.jpg";
import nightPartyImage3 from "../assets/night_party_event3.jpg";
import "./Contact.css";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import ScrollToTop from "../components/ScrollToTop";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="hero">
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
        <div className="hero-content mb-2">
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
                <h6 className="mb-3">Follow Us</h6>
                <div className="social-card">
                  <a className="socialContainer containerOne" /*href=""*/>
                    <svg viewBox="0 0 16 16" className="socialSvg instagramSvg">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                    </svg>
                  </a>

                  <a className="socialContainer containerTwo" /*href=""*/>
                    <svg viewBox="0 0 16 16" className="socialSvg twitterSvg">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                  </a>

                  <a className="socialContainer containerThree" /*href=""*/>
                    <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>

                  <a className="socialContainer containerFour" /*href=""*/>
                    <svg viewBox="0 0 16 16" className="socialSvg whatsappSvg">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                    </svg>
                  </a>
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
                <span>Message</span>
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

      <section className="pt-5" style={{paddingBottom:'1.8rem'}}>
        <div className="custom-row align-items-center">
          <div className="container-s1 col-md-6 col-sm-12">
            <h1 className="p-3">
              Let us transform your vision into a remarkable reality. We do for
              all your event management needs, and let's create unforgettable
              moments together.
            </h1>
          </div>

          <div className="container-s2 px-4 col-md-6 col-sm-12 col">
            <div className="location-description d-flex justify-content-around align-items-center">
              <div className="d-flex align-items-center">
                <FaLocationDot className="location-card-icon" />
                &nbsp;&nbsp;
                <h5 className="fs-6">Parippally, Kollam 691574</h5>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div className="d-flex align-items-center">
                <FaPhoneAlt className="location-card-icon" />
                &nbsp;&nbsp;
                <h5 className="fs-6">8281578305 830493004</h5>
              </div>
            </div>
            <div className="location-card bg-black mt-3">
              <h1 className="text-center text-white">
                <br />
                <br />
                <br />
                Location card here.
                <br />
                <br />
                <br />
                <br />
              </h1>
            </div>
          </div>
          
        </div>
      </section>
      <ScrollToTop/>
    </div>
  );
}

export default Contact;
