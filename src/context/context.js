import React, { useState } from "react";
import { createContext } from "react";

const QuizContext = createContext();

export default function Quiz(props){
    const [start, setStart] = useState(false); 
    const [exit, setExit] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [changedOption, setChangedOption] = useState([false, false, false, false, false]);
    console.log("ques-", questions);
    /*let arr = new Array[5];
    for(let i=0 ; i<5; i++){
        arr[i] = 0;
    }
    const [correctAns, setCorrectAns] = useState(arr);*/
    //console.log(correctAns);
    return(
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, score, setScore, changedOption, setChangedOption, questions, setQuestions
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext};