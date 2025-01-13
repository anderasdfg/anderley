import React from "react";
import "../styles/Intro.css";
import Sphere from "./Sphere";
import { TypeAnimation } from 'react-type-animation'; // Nuevo import


class Intro extends React.Component {  
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }  
  render() {
    return (
      <div id="intro">
        <Sphere/>        
        <div className="intro-content">
        <span className="intro-title">
        <TypeAnimation
                    sequence={[
                        "hi, it's Anderley",
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block' }}
                />
                </span>
            <div className="intro-desc">
              {"I'm a software engineer based in Lima, PE, specializing in building websites and software systems."}
              <br/>                        
              {'I have great interest in full-stack development, data science and tech stuff.'}
              <br/>
            </div>            
            <a className="intro-link" href="#about">{"see more >"}</a>
        </div>        
      </div>
    );
  }
}

export default Intro;
