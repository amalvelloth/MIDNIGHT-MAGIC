import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <section>
        <div className="hero-home">
          <h1 className="mb-4">
            Welcome to{" "}
            <span style={{ color: "white", fontWeight: "bold" }}>
              MIDNIGHT MAGIC
            </span>{" "}
            as the premier partner in creating unforgettable events.
          </h1>
          <p>
            We specialize in crafting extraordinary events that leave a
            lasting impression. From corporate gatherings to milestone
            celebrations, we're here to turn your vision into reality. With our
            passion for excellence and unwavering commitment to seamless
            execution, we're your trusted partner in event management. Explore
            our services, meet our team, and let's create unforgettable moments
            together.
          </p>
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default Home;
