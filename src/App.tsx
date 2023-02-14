import { NavBar } from "./Components/NavBar";
import { Hero } from "./Components/Hero";
import { About } from "./Components/About";
import { Squiggle } from "./Components/Squiggle";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <Squiggle></Squiggle>
      <About></About>
    </div>
  );
}

export default App;
