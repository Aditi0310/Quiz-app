import React, { useState } from 'react'
import Logo from '../images/logo.svg'
import Option from '../components/option'
import Image1 from '../images/image1.png'
import Progress from '../components/progress'
import { QuizData } from '../quizData'

function App() {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(QuizData[0]);
    const [result, setResult] = useState(false);

    const update = () => {
        if(index+1 == QuizData.length){
            setResult(true);
        }
        else{
            setIndex(index+1);
            setQuestion(QuizData[index]);
        }
        
    }
    return (
        
        <div className='quizContainer'>
            
            <img src={Image1}/>
            <div style={{position:"absolute", marginTop:"50px", display:"flex", alignItems:"center", justifyContent:"center", zIndex:10}}>
                <Progress index={index}/>
            </div>
            <div className='innerQuizContainer'>
                <p className='question' style={{fontWeight:600, textAlign:"center", marginTop:"30px", marginBottom:"30px"}}>{question.question}</p>
                {question.image ? <img src={question.image}/> : null}
                {question.options.map((option, i) => (
                    <Option option={option} key={i}/>
                ))}
                
                
                <button className='quiz-button' onClick={update}>Start</button>
            </div>
        </div>

    );
  }
  
  export default App;
  