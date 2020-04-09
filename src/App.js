import React, { Component } from "react";
import Timer from "../src/components/Timer/Timer";
import "../src/components/Timer/Timer.css";

class App extends Component {
   render() {
      return(
         <Timer time={1200} step={1} autostart/>
      )
   }
}
  
export default App;

