import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const tech_stack = [
      {
        stack: "Javascript",
        url: "https://media.discordapp.net/attachments/793921169128292373/1062522076407283714/javascript.png"
      },{
        stack: "Vue.js",
        url: "https://media.discordapp.net/attachments/793921169128292373/1062522075870396528/vue.png"
      },{
        stack: "Node.js",
        url: "https://media.discordapp.net/attachments/793921169128292373/1062522077376168037/nodejs.png"
      },{
        stack: "Mongo DB",
        url: "https://media.discordapp.net/attachments/793921169128292373/1062522076851863642/mongodb.png"
      }
  ];

    return (
      <div id="about">
        <div className="section-header">
          <span className="section-title">{'> about_me'}</span>
        </div>
        <div className="about-content">
            <div className="about-description">              
                <p>
                I’m currently <b>Frontend Developer</b> at 
                <a href="https://attachmedia.com/en/"> Attach</a>, working in the
                Analytics and Artificial Intelligence trib.  
                </p>
                <p>               
                Here are a few technologies I've experience:                
               </p>
                <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (  
                    <FadeInSection delay={`${i + 1}00ms`}>                  
                    <li>
                      <img src={tech_item.url}/>
                      <p>{tech_item.stack}</p>
                    </li>                    
                    </FadeInSection>
                  );
                })}
              </ul>
                <p>
                  When I am not working or playing with the code, I like to play videogames or watch some series.
                </p>                                
                
            </div>
            <div className="about-image">
              <img src="https://media.discordapp.net/attachments/793921169128292373/1062511667591786546/F10C203C-7C89-4048-B02E-318A83D41251.jpg?width=469&height=584" alt="anderley"/>
            </div>
          </div>
      </div>
    );
  }
}

export default About;
