import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ProfessionalExcellence from "../assets/professional-excellence.svg";
import PersonalizedService from "../assets/personalized-service.svg";
import AttentiontoDetail from "../assets/attention-to-detail.svg";
import SeamlessExecution from "../assets/seamless-execution.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Timeline.css";
import { Fade } from "react-bootstrap";

function Timeline() {


  
  return (
    <div className="timeline">
      <VerticalTimeline>
        <div id="" class="vertical-timeline-elemtent vertical-timeline-element">
          <span class="vertical-timeline-element-icon bounce-in">
            <img
              src={ProfessionalExcellence}
              style={{ width: "40px" }}
              alt=""
            />
          </span>
          <div className="vertical-timeline-element-content">
            <div class="vertical-timeline-element-content-arrow"></div>
            <div class="card-title">Professional Excellence</div>
            <div class="card-body">
              Our experienced team brings a wealth of knowledge and expertise to
              the table, ensuring your event is executed with precision and
              professionalism.
            </div>
          </div>
        </div>

        <div id="" class="vertical-timeline-elemtent vertical-timeline-element">
          <span class="vertical-timeline-element-icon bounce-in">
            <img src={PersonalizedService} style={{ width: "40px" }} alt="" />
          </span>
          <div class="vertical-timeline-element-content">
            <div class="vertical-timeline-element-content-arrow"></div>
            <div class="card-title">Personalized Service</div>
            <div class="card-body">
              We understand that each event is unique. Our approach is tailored
              to your specific needs, ensuring a personalized and memorable
              experience for all involved.
            </div>
          </div>
        </div>

        <div id="" class="vertical-timeline-elemtent vertical-timeline-element">
          <span class="vertical-timeline-element-icon bounce-in">
            <div class="horizontal-line"></div>
            <img src={AttentiontoDetail} style={{ width: "40px" }} alt="" />
          </span>
          <div class="vertical-timeline-element-content">
            <div class="vertical-timeline-element-content-arrow"></div>
            <div class="card-title">Attention to Detail</div>
            <div class="card-body">
              The success of an event lies in the details. We meticulously plan
              and execute every aspect, leaving nothing to chance and ensuring a
              flawless event.
            </div>
          </div>
        </div>

        <div id="" class="vertical-timeline-elemtent vertical-timeline-element">
          <span class="vertical-timeline-element-icon bounce-in">
            <div class="horizontal-line"></div>
            <img src={SeamlessExecution} style={{ width: "40px" }} alt="" />
          </span>
          <div class="vertical-timeline-element-content">
            <div class="vertical-timeline-element-content-arrow"></div>
            <div class="card-title">Seamless Execution</div>
            <div class="card-body">
              Our commitment to excellence extends to the seamless execution of
              your event. Sit back and enjoy the occasion while we handle the
              logistics and coordination.
            </div>
          </div>
        </div>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
