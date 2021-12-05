import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import About from './components/about'
import Skill from './components/skill'
import Timeline from './components/timeline'
import Award from './components/award'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<About></About>
          <Skill></Skill>
					<Timeline></Timeline>
          <Award></Award>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
