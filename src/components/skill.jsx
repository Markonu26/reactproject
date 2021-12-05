import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
          <section className="colorlib-about" data-section="skill">
            <div className="colorlib-narrow-content">
                <div className="row row-pt-md">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <h2 className="colorlib-heading">some of my expertise</h2>
                </div>
                </div>
                <div className="row row-pt-md">
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-2">
                    <div className="desc">
                        <h3>Web Development Fronted </h3>
                        <p>I have experience building websites dashboard monitoring for smart factory using JavaScript,Vue,HTML,CSS</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-2">
                    <div className="desc">
                        <h3>Mechatronic IOT</h3>
                        <p>I have experience building a Cleanroom using PLC, Electronic Part, Robotic and combine to web development</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-2">
                    <div className="desc">
                        <h3>Project Coordinator</h3>
                        <p>I have experience leading with team to solved anything project like Manufactur building, web dashboard developmen and more</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </section>
      </div>
    )
  }
}
