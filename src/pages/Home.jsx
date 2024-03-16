import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container-home">
      <section>
        <div className="hero-home">
          <h1 className="mb-4">
            Welcome to <span className="bold-white">MIDNIGHT MAGIC</span> as the
            premier partner in creating unforgettable events.
          </h1>
          <p>
            We specialize in crafting extraordinary events that leave a lasting
            impression. From corporate gatherings to milestone celebrations,
            we're here to turn your vision into reality. With our passion for
            excellence and unwavering commitment to seamless execution, we're
            your trusted partner in event management. Explore our services, meet
            our team, and let's create unforgettable moments together.
          </p>
          <h1 className="mt-5 text-white">How it works ?</h1>
          <div className="box">
            <div className="custom-row d-flex">
              <div className="container-box1 p-3 col-md-4 col-sm-6">
                <h1>
                  Share Ideas.
                  <br /> Our Event Organizers do for you
                </h1>
              </div>
              <div className="container-box2 d-flex justify-content-center p-3 col-md-8 col-sm-6">
                <div className="row align-items-center">
                  <div className="sm-box col-md-4">
                    <h1 className="text-white">Icon1</h1>
                  </div>
                  <div className="sm-box col-md-4">
                    <h1 className="text-white">Icon2</h1>
                  </div>
                  <div className="sm-box col-md-4">
                    <h1 className="text-white">Icon3</h1>
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
