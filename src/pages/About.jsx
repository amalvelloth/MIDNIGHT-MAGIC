import React, { useEffect } from "react";
import "./About.css";
import Aos from "aos";
import 'aos/dist/aos.css'
import Timeline from "../components/Timeline";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])
  return (
    <div className="container-about">
      <section className="about-section1-parallax" id="about">
        <div className="inner1">
          <h1>About Us</h1>
          <p data-aos="fade" data-aos-duration="2000">
            At Midnight Magic, we are more than event planners – we are your
            partners in crafting extraordinary moments. With a steadfast
            commitment to excellence and a passion for creating lasting
            memories, we take pride in being your go-to experts for event
            management.,
            <br />
            <br />
            Our journey began with a vision to redefine the event industry by
            delivering unparalleled service, unmatched creativity, and
            unwavering professionalism. With each event we undertake, we bring a
            wealth of experience and expertise to the table, ensuring that every
            detail is meticulously planned and flawlessly executed.
          </p>
        </div>
      </section>
      <section className="about-section2 pb-0">
        <div className="inner2">
          <div style={{ paddingBottom: "13px", fontFamily: "poppins-medium" }}>
            <h1>Our Expertise</h1>
          </div>
          <div className="row">
            <article className="pb-5 col">
              <div className="expertise-card1">
                <div className="card-overlay"></div>
                <div className="card-content">
                  <h1>Corporate Events:</h1>
                  <p className="m-0" data-aos="fade" data-aos-duration="2000" style={{ fontFamily: "poppins-extralight" }}>
                    Elevate your corporate image with meticulously planned and
                    executed events. From conferences and seminars to team-building
                    activities, we ensure a flawless experience that aligns with your
                    brand and objectives.
                  </p>
                </div>
              </div>
            </article>
            <article className="pb-5 col">
              <div className="expertise-card2">
                <div className="card-overlay"></div>
                <div className="card-content">
                  <h1>Graduations:</h1>
                  <p className="m-0" data-aos="fade" data-aos-duration="2000" style={{ fontFamily: "poppins-extralight" }}>
                    Celebrate academic achievements with elegance and style. Our team
                    orchestrates graduation ceremonies that capture the essence of
                    accomplishment, creating cherished memories for graduates and
                    their families.
                  </p>
                </div>
              </div>
            </article>
            <article className="pb-5 col">
              <div className="expertise-card3">
                <div className="card-overlay"></div>
                <div className="card-content">
                  <h1>Special Occasions:</h1>
                  <p className="m-0" data-aos="fade" data-aos-duration="2000" style={{ fontFamily: "poppins-extralight" }}>
                    Whether it's an anniversary, product launch, or any other special
                    occasion, we thrive on turning your vision into reality. Our
                    attention to detail ensures that every moment is crafted with
                    precision and creativity.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="about-section3 b">
        <div className="inner3 ">
          <h1 style={{ fontFamily: "poppins-extralight" }}>Why choose us ?</h1>

          <div className="container py-3 m-0">
          </div>
          <Timeline />


        </div>
      </section>
    </div>
  );
}

export default About;
