import React, { useState } from "react";
import { createContext } from "react";

const QuizContext = createContext();

export default function Quiz(props){
    const [start, setStart] = useState(false); 
    const [exit, setExit] = useState(false);
    const [score, setScore] = useState([]);
    const [changedOption, setChangedOption] = useState(false);
    /*let arr = new Array[5];
    for(let i=0 ; i<5; i++){
        arr[i] = 0;
    }
    const [correctAns, setCorrectAns] = useState(arr);*/
    //console.log(correctAns);
    return(
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, score, setScore, changedOption, setChangedOption
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext};