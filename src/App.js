import "./styles/Global.css";
import './App.css';
import SidebarNav from "./components/SidebarNav";
import Intro from './components/Intro';
import About from './components/About';

export default function App() {
  return (   
      <div className="App">
      <div id="content">
        <Intro/>
        <About/>
      </div>
      <SidebarNav/>
    </div>
  );
}
