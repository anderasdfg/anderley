import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const tech_stack = [
      {
        stack: "Javascript",
        url: "https://media.discordapp.net/attachments/793921169128292373/1062522076407283714/javascript.png?ex=6785a9cb&is=6784584b&hm=80617a3619242a4f92280de9cf1ceaed1a5dd44b15bc51e411e90be2a63465b2&=&format=webp&quality=lossless&width=44&height=44",
      },
      {
        stack: "Vue.js",
        url: "https://media.discordapp.net/attachments/793921169128292373/1062522075870396528/vue.png?ex=6785a9cb&is=6784584b&hm=549c2ff7ab2d2e2ab1026b4990c0508c141818af66e019d070fe68be03ec710d&=&format=webp&quality=lossless&width=44&height=44",
      },
      {
        stack: "Node.js",
        url: "https://media.discordapp.net/attachments/793921169128292373/1062522077376168037/nodejs.png?ex=6785a9cb&is=6784584b&hm=d5517b17b048cd0b036b067750e8885c9b7efe4df9c53a082ed516336761c8d3&=&format=webp&quality=lossless&width=44&height=44",
      },
      {
        stack: "Mongo DB",
        url: "https://media.discordapp.net/attachments/793921169128292373/1062522076851863642/mongodb.png?ex=6785a9cb&is=6784584b&hm=480b98079114bf2d7291c50e9eb3d86f74eb65c80a0511e55577931775d1f8d5&=&format=webp&quality=lossless&width=44&height=44",
      },
    ];

    return (
      <div id="about">
        <div className="section-header">
          <span className="section-title">{"> about_me"}</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            <p>
              I’m currently <b>Frontend Developer</b> at
              <a href="https://attachmedia.com/en/"> Attach</a>, working in the
              Analytics and Artificial Intelligence tribe.
            </p>
            <p>Here are a few technologies I've experience:</p>
            <ul className="tech-stack">
              {tech_stack.map(function (tech_item, i) {
                return (
                  <FadeInSection delay={`${i + 1}00ms`}>
                    <li>
                      <img src={tech_item.url} />
                      <p>{tech_item.stack}</p>
                    </li>
                  </FadeInSection>
                );
              })}
            </ul>
            <p>
              When I am not working or playing with the code, I like to play
              videogames or watch some series.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://media.discordapp.net/attachments/793921169128292373/1328215100708098068/AP1GczPLAi2D75TvpwUtUf72F0IcgDhSA5z2mvZQ9_f0KOEGUdovWnnVhuV6vQw724-h965-s-no-gm.png?ex=6785e435&is=678492b5&hm=90052cf0bdfbc2cd15e67558c9d805e2ed2c5a1fed39502a8625fd54056e87ab&=&format=webp&quality=lossless&width=236&height=314"
              alt="anderley"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
