import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container-about">
        <section className="about-section1-parallax">
          <div className="inner1">

              <h1>
                <u>ABOUT US</u>
              </h1>
              <p>
                At Midnight Magic, we are more than event planners – we are your
                partners in crafting extraordinary moments. With a steadfast
                commitment to excellence and a passion for creating lasting
                memories, we take pride in being your go-to experts for event
                management.,
                <br />
                <br />
                Our journey began with a vision to redefine the event industry
                by delivering unparalleled service, unmatched creativity, and
                unwavering professionalism. With each event we undertake, we
                bring a wealth of experience and expertise to the table,
                ensuring that every detail is meticulously planned and
                flawlessly executed.
              </p>
          </div>
        </section>
      <section className="about-section2">
        <div className="inner2">
          <u>
            <h1 className="pb-3">Our Expertise</h1>
          </u>
          <h1>Corporate Events:</h1>
          <p>
            Elevate your corporate image with meticulously planned and executed
            events. From conferences and seminars to team-building activities,
            we ensure a flawless experience that aligns with your brand and
            objectives.
          </p>

          <h1>Graduations:</h1>
          <p>
            Celebrate academic achievements with elegance and style. Our team
            orchestrates graduation ceremonies that capture the essence of
            accomplishment, creating cherished memories for graduates and their
            families.
          </p>

          <h1>Special Occasions:</h1>
          <p>
            Whether it's an anniversary, product launch, or any other special
            occasion, we thrive on turning your vision into reality. Our
            attention to detail ensures that every moment is crafted with
            precision and creativity.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
