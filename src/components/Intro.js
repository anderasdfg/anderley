import React from "react";
import "../styles/Intro.css";
import Sphere from "./Sphere";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

export default function Intro() {  
    return (
      <div id="intro">
        <Sphere/>
        {"holaaa"}
        <div className="intro-content">
            <Typist avgTypingDelay={120}>
                <span className="intro-title">
                    {"hi, it's"}
                    <br/>
                    <span className="intro-name">{"Anderley Candela"}</span>            
                </span>
            </Typist>
        </div>        
      </div>
    );  
}

