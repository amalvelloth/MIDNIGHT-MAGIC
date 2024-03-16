import React from "react";
import "./Home.css";
import organiseSVG from "../assets/organise.svg";
import eventSVG from "../assets/event.svg";
import shakehandSVG from "../assets/shakehand.svg";

function Home() {
  return (
    <div className="container-home">
      <section className="home-section1">
        <div className="hero-home">
          <h1 className="mb-4">
            Welcome to <span className="bold-white">MIDNIGHT MAGIC</span> as the
            premier partner in creating unforgettable events.
          </h1>
          <p>
            With a passion for excellence and an unwavering commitment to
            delivering seamless experiences, we are your go-to event management
            experts. From corporate gatherings to milestone celebrations, we
            specialize in crafting events that leave a lasting impression.
          </p>
          <h5 className="mt-5 text-white fw-light">How it works ?</h5>
          <div className="box">
            <div className="custom-row d-flex">
              <div className="container-box1 p-3 col-md-4 col-sm-6">
                <h1>
                  Share Ideas.
                  <br /> Our Event Organizers do for you
                </h1>
                <div className="d-flex">
                  <button className="home-message-btn my-3">
                    <a href="tel:8281578305" style={{textDecoration:'none'}}><span><h6 className="m-0">Call 8281578305</h6></span></a>
                  </button>
                </div>
              </div>
              <div className="container-box2 d-flex justify-content-center p-3 col-md-8 col">
                <div className="row align-items-center">
                  <div className="sm-box d-flex flex-column align-items-center col-md-4 col-sm-12 justify-content-center">
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
                  <div className="sm-box d-flex flex-column align-items-center col-md-4 col-sm-12 justify-content-center">
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
                  <div className="sm-box d-flex flex-column align-items-center col-md-4 col-sm-12 justify-content-center">
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
        </div>
      </section>
      {/* Add more sections as needed */}
    </div>
  );
}

export default Home;
