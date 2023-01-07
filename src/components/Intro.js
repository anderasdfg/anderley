import React from "react";
import "../styles/Intro.css";
import Sphere from "./Sphere";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

class Intro extends React.Component {
  render() {
    return (
      <div id="intro">
        <Sphere/>        
        <div className="intro-content">
            <Typist avgTypingDelay={120}>
                <span className="intro-title">
                    {"hi, it's "}                    
                    <span className="intro-name">{"Anderley Candela"}</span>            
                </span>
            </Typist>
            {"I'm a software engineer based in Lima, PE"}
            <br/>
            {"specializing in building websites, applications and interesting stuff."}
            <br/>
            <a className="intro-link">{"see more >"}</a>
        </div>        
      </div>
    );
  }
}

export default Intro;
