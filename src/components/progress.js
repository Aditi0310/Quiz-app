import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
//import { easeQuadInOut } from "d3-ease";
//import AnimatedProgressProvider from "./AnimatedProgressProvider";
//import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators
//import RadialSeparators from "./RadialSeparators";

const percentage = 66;
const text = 1;
const App = ({index}) => {
  return(

    
    <div style={{width:"23%"}}>
      <CircularProgressbar value={percentage} text={`${index+1}/5`} background backgroundPadding={6} styles={buildStyles({
          textColor: "black",
          textSize:"30",
          pathColor: "turquoise",
          backgroundColor:"#fff"
        })}/>
   </div>
    

    
  )
    };

function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
     
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
        
      </div>
    </div>
  );
}
export default App;
