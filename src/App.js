import "./styles/Global.css";
import "./App.css";
import About from "./components/About";
import Credits from "./components/Credits";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import SidebarNav from "./components/SidebarNav";
import { useEffect, useState } from "react";

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (event) => {
      //TODO: Fix this issue
      const { clientX, clientY } = event      
      setPosition({ x: clientX, y: clientY + window.scrollY });
    };

    window.addEventListener("mousemove", handleMove);    

    return () => {

      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(207, 105, 154, 0.5)",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <div className="App">
        <div id="content">
          <Intro />
          <About />
          <Experience />
          <Credits></Credits>
        </div>
        <SidebarNav />
      </div>
    </div>
  );
}
