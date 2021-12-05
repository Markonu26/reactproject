import React, { Component } from 'react'
import { FaAward } from "react-icons/fa";


export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center text-white" >
              <div className="author-img" style={{backgroundImage: 'url("https://pbs.twimg.com/profile_images/833953118962356224/fnmMBn0O.jpg")'}} />
              <h1 id="colorlib-logo"><a href="index.html">MARKONU</a></h1>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#skill" data-nav-section="skill">Skill and Experience</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#award" data-nav-section="award">Award</a></li>
                </ul>
              </div>
            </nav>
            <div className="colorlib-footer">
              <p><small>
              <FaAward /> mardianto.eko26@gmail.com
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
