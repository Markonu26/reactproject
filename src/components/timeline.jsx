import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-label">
                        
                        <h2>Automation IOT 4.0 <span>2019-Present</span></h2>
                        <p>After 2 years as an engineering robot, I was promoted to create a 4.0-based smart industry with the main jobdesk being to make a smart factory cleanroom as a production place that is connected to IOT, PLC SCADA and also to monitor the production process I created a private web that is used by all departments to support production processes, such as checksheet maintenance, preventive, cleaning reports based on web, and chiller, heater, machine injection, hvac realtime monitoring using mqtt. In this jobdesk I am a fronted developer who designs all infrastructure and makes web designs. Besides that, I also become a trainer and project coordinator to ensure that all projects can run according to the plan and maximum results</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-label">
                        <h2>Robotic Engineer Biggy Cemerlang PT<span> 2017-2019</span></h2>
                        <p>I registered as a robotic engineer according to my educational background. at biggy brilliant I started my career as a robotic engineer with RND making a manufacturing process called In mold labbeling with the help of PLC, Electronic parts, hmi, scada and many more</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-label">
                      <h2>Internship at Apparel One Indonesia <span>2015-2016</span></h2>
                        <p>I did an internship for 3 months in the garment manufacturing industry as an innovation center, where I made an automatic RND system to make work easier, at that time I made an automatic clothes folding machine. I am an electrical and design department working in a team.</p> 
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
