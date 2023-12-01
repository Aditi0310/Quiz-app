import React, { useState } from "react";
import { createContext } from "react";

//created a context to provide some states all over the child components
const QuizContext = createContext();

export default function Quiz(props){
    const [start, setStart] = useState(false); 
    const [exit, setExit] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [changedOption, setChangedOption] = useState([false, false, false, false, false]);
    
    return(
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, score, setScore, changedOption, setChangedOption, questions, setQuestions
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext};