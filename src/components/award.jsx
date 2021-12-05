import React, { Component } from 'react'
import { FaAward } from "react-icons/fa";
export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="award">
          <div className="colorlib-narrow-content">
              <h2 class="mb-0"> <FaAward /> Awards</h2>
                  <li>
                      <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                      Student Award 2015
                  </li>
                   <li>
                        <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                        Student Competition PKM-T from goverment Indonesia
                  </li>
                  <li>
                        <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                          1
                        <sup>st</sup>
                        Place - Indi award 4.0 - Kemenperin 2020
                  </li>
          </div>
        </section>
      </div>
    )
  }
}
