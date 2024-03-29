import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import ProfessionalExcellence from '../assets/professional-excellence.svg'
import Aos from "aos";
import 'aos/dist/aos.css'
import './Timeline.css'

function Timeline() {
    return (
        <div className='timeline'>
            <VerticalTimeline lineColor='white' animate={false}>
                <VerticalTimelineElement className='vertical-timeline-elemtent' iconStyle={{ background: 'white' }}>
                    <div class="glow"></div>
                    <div class="borderglow"></div>
                    <div class="card-title">Professional Excellence</div>
                    <div class="card-body">
                        Our experienced team brings a wealth of knowledge and
                        expertise to the table, ensuring your event is executed with
                        precision and professionalism.
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-elemtent' iconStyle={{ background: 'white' }}>
                    <div class="glow"></div>
                    <div class="borderglow"></div>
                    <div class="card-title">Personalized Service</div>
                    <div class="card-body">
                        We understand that each event is unique. Our approach is
                        tailored to your specific needs, ensuring a personalized and
                        memorable experience for all involved.
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-elemtent' iconStyle={{ background: 'white' }}>
                    <div class="glow"></div>
                    <div class="borderglow"></div>
                    <div class="card-title">Attention to Detail</div>
                    <div class="card-body">
                        The success of an event lies in the details. We meticulously
                        plan and execute every aspect, leaving nothing to chance and
                        ensuring a flawless event.
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-elemtent' iconStyle={{ background: 'white' }}>
                    <div class="glow"></div>
                    <div class="borderglow"></div>
                    <div class="card-title">Seamless Execution</div>
                    <div class="card-body">
                        Our commitment to excellence extends to the seamless execution
                        of your event. Sit back and enjoy the occasion while we handle
                        the logistics and coordination.
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Timeline