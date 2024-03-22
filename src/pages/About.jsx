import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container-about">
      <section className="about-section1-parallax">
        <div className="inner1">
          <h1>About Us</h1>
          <p>
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
      <section className="about-section2">
        <div className="inner2">
          <div style={{ paddingBottom: "13px", fontFamily: "poppins-medium" }}>
            <h1>Our Expertise</h1>
          </div>
          <article className="pb-3">
            <h1>Corporate Events:</h1>
            <p>
              Elevate your corporate image with meticulously planned and
              executed events. From conferences and seminars to team-building
              activities, we ensure a flawless experience that aligns with your
              brand and objectives.
            </p>
          </article>
          <article className="pb-3">
            <h1>Graduations:</h1>
            <p>
              Celebrate academic achievements with elegance and style. Our team
              orchestrates graduation ceremonies that capture the essence of
              accomplishment, creating cherished memories for graduates and
              their families.
            </p>
          </article>
          <article className="pb-3">
            <h1>Special Occasions:</h1>
            <p>
              Whether it's an anniversary, product launch, or any other special
              occasion, we thrive on turning your vision into reality. Our
              attention to detail ensures that every moment is crafted with
              precision and creativity.
            </p>
          </article>
        </div>
      </section>
      <section className="about-section3">
        <div className="inner3">
          <h1 style={{ fontFamily: "poppins-light" }}>Why choose us ?</h1>
          <div className="row col-md-12 col-sm-6">
            <div class="notification">
              <div class="notiglow"></div>
              <div class="notiborderglow"></div>
              <div class="notititle">Professional Excellence</div>
              <div class="notibody">
                Our experienced team brings a wealth of knowledge and expertise
                to the table, ensuring your event is executed with precision and
                professionalism.
              </div>
            </div>
            <div class="notification">
              <div class="notiglow"></div>
              <div class="notiborderglow"></div>
              <div class="notititle">Personalized Service</div>
              <div class="notibody">
                We understand that each event is unique. Our approach is
                tailored to your specific needs, ensuring a personalized and
                memorable experience for all involved.
              </div>
            </div>
          </div>
          <div className="row col-md-12 col-sm-6">
            <div class="notification">
              <div class="notiglow"></div>
              <div class="notiborderglow"></div>
              <div class="notititle">Attention to Detail</div>
              <div class="notibody">
                The success of an event lies in the details. We meticulously
                plan and execute every aspect, leaving nothing to chance and
                ensuring a flawless event.
              </div>
            </div>
            <div class="notification">
              <div class="notiglow"></div>
              <div class="notiborderglow"></div>
              <div class="notititle">Seamless Execution</div>
              <div class="notibody">
                Our commitment to excellence extends to the seamless execution
                of your event. Sit back and enjoy the occasion while we handle
                the logistics and coordination.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
