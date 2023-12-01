import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const App = ({index, circleRatio, rot, width, type, percent}) => {
    const percentage = (index+1)/5 * 100;
    
  return(

    
    <div style={{width:width}}>
      <CircularProgressbar value={type=="result" ? percent == 0 ? 0 : percent : percentage} text={type=="result" ? `${percent}%` : `${index+1}/5`} background backgroundPadding={6} 
      circleRatio={circleRatio}
      styles={buildStyles({
          rotation:  rot,
          textColor: "black",
          textSize:"30",
          pathColor: "#44B77B",
          backgroundColor:"#fff" 
        })}/>
   </div>
    

    
  )
    };

export default App;
