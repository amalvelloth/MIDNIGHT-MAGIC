import React, { useEffect } from "react";
import "./Home.css";
import organiseSVG from "../assets/organise.svg";
import eventSVG from "../assets/event.svg";
import shakehandSVG from "../assets/shakehand.svg";
import cardimg from "../assets/night_party_event1.jpg";
import cardimg2 from "../assets/night_party_event2.jpg";
import cardimg3 from "../assets/night_party_event3.jpg";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import balloons from "../assets/balloons.svg";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="container-home">
      <div className="inner">
        <section className="home-section1" id="home">
          <div className="row">
            <div className="hero-home d-flex flex-column justify-content-center col-md-6">
              <h1 className="mb-4 ">
                Welcome to <span className="animated-title">MIDNIGHT MAGIC</span> as
                the premier partner in creating unforgettable events.
              </h1>
              <p
                style={{ zIndex: "1", lineHeight: "2" }}
                data-aos="fade"
                data-aos-duration="2000"
              >
                With a passion for excellence and an unwavering commitment to
                delivering seamless experiences, we are your go-to event
                management experts. From corporate gatherings to milestone
                celebrations, we specialize in crafting events that leave a
                lasting impression.
              </p>
            </div>

            <div className="card-container align-items-center justify-content-center col-md-6" data-aos="fade"
              data-aos-duration="2000">
              <div className="card">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={cardimg}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={cardimg2}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={cardimg3}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="home-section2">
        <div className="inner2">
          <div className="p-3 ">
            <div className="box">
              <div className="custom-row d-flex">
                <div className="container-box1 p-3 col-md-4 col-sm-6">
                  <h5 className="text-white fw-light">How it works ?</h5>
                  <h1 className="fw-bold">
                    Share Ideas.
                    <br /> Our Event Organizers do for you
                  </h1>
                  <div className="d-flex">
                    <button className="home-message-btn my-3">
                      <a href="tel:8281578305" style={{ textDecoration: "none" }}>
                        <span>
                          <h6 className="m-0">Call 8281578305</h6>
                        </span>
                      </a>
                    </button>
                  </div>
                </div>
                <div className="container-box2 d-flex justify-content-center p-3 col-md-8 col">
                  <div className="row align-items-center">
                    <div className="sm-box d-flex flex-column align-items-center col-md-4 col-sm-12 justify-content-center" data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom">
                      <div
                        className="circle"
                        style={{ backgroundColor: "#f3ce01" }}
                      >
                        <img
                          className="svg"
                          src={eventSVG}
                          style={{ width: "50px" }}
                          alt=""
                        />
                      </div>
                      <span className="mt-2 text-center">
                        <h6>We love to hear about event</h6>
                      </span>{" "}
                      {/* Short word */}
                    </div>
                    <div className="sm-box d-flex flex-column align-items-center col-md-4 col-sm-12 justify-content-center" data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom">
                      <div
                        className="circle"
                        style={{ backgroundColor: "#DE287D" }}
                      >
                        <img
                          src={shakehandSVG}
                          style={{ width: "50px" }}
                          alt=""
                        />
                      </div>
                      <span className="mt-2 text-center">
                        <h6>Plan and discuss with us</h6>
                      </span>{" "}
                      {/* Short word */}
                    </div>
                    <div className="sm-box d-flex flex-column align-items-center col-md-4 col-sm-12 justify-content-center" data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom">
                      <div
                        className="circle"
                        style={{ backgroundColor: "#0172EF" }}
                      >
                        <img src={organiseSVG} style={{ width: "50px" }} alt="" />
                      </div>
                      <span className="mt-2 text-center">
                        <h6>We organize Event Easily</h6>
                      </span>{" "}
                      {/* Short word */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span>
              <img src={balloons} style={{ width: "200px" }} alt="" data-aos="fade-up-right" />
            </span>
          </div>
        </div>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
}

export default Home;
