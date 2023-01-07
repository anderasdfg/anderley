import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "../styles/Sphere.css";

let r = 150;
let offset = 0;

const Sketch = p5 => {
    p5.setup = () => {
        p5.createCanvas(400, 400, p5.WEBGL);
        p5.angleMode(p5.DEGREES);        
        
        p5.stroke(252,177,234);
        p5.strokeWeight(3);
        p5.noFill();
    }

    p5.draw = () => {
        p5.rotateZ(120);        
        p5.clear();
        p5.background(28, 28, 28);
        p5.orbitControl(4,4);
        
        for(let phi = 0; phi < 180; phi += 5) {
          p5.beginShape(p5.POINTS);
          for(let theta = 0; theta < 360; theta +=5) {      
            let x = r * p5.cos(phi+offset);
            let y = r * p5.sin(phi+offset) * p5.sin(theta);
            let z = r * p5.sin(phi+offset) * p5.cos(theta);
            p5.vertex(x,y,z);            
          }
          p5.endShape(p5.CLOSE);
        }        
        offset += 0.2;
    }
}

const Sphere = () => (
    <div id="sphere">
      <ReactP5Wrapper sketch={Sketch} />
    </div>
);

export default Sphere;
