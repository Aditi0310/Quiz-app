import React, { useContext, useState } from 'react'
import Logo from '../images/logo.svg'
import Option from '../components/option'
import Image1 from '../images/image1.png'
import Progress from '../components/progress'
import { QuizData } from '../quizData'
import { QuizContext } from '../context/context'



function App() {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(QuizData[0]);
    const [result, setResult] = useState(false);
    const [ans, setAns] = useState([]);

    const {score, setScore, exit, setExit,changed, setChangedOption} = useContext(QuizContext);

    
    const checkCorrect = () => {
        let arr = question.answer;
        let curr_score = 1;
        ans.sort();
        for(let i=0 ; i<arr.length ; i++){
            if(arr[i] != ans[i]) curr_score = 0;
        }
        score.push(curr_score);
        console.log(score);
    }
    const update = async () => {
        await checkCorrect();
        if(index+1 == QuizData.length){
            setExit(true);
        }
        else{
            setIndex(index+1);
            setQuestion(QuizData[index]);
        }
        setAns([]);
        setChangedOption(false);
    }
   
    const checkAnswer =  (index) => {
       // console.log(ans);
       setChangedOption(!changed);
         ans.push(index);
       
        console.log(ans);
        
    }
    return (
        
        <div className='quizContainer'>
            
            <img src={Image1}/>
            <div style={{position:"absolute", marginTop:"50px", display:"flex", alignItems:"center", justifyContent:"center", zIndex:10, marginLeft:"40px"}}>
                <Progress index={index} circleRatio={1} width="27%"/>
            </div>
            <div className='innerQuizContainer' style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <p className='question' style={{fontWeight:600, textAlign:"center", marginTop:"50px", marginBottom:"30px"}}>{question.question}</p>
                {question.image ? <img src={question.image} style={{width:"150px"}}/> : null}
                {question.options.map((option, i) => (
                    <div key={i} onClick={() => checkAnswer(i)}>
                    <Option option={option} />
                    </div>
                ))}
                
                
                <button className='quiz-button' onClick={update}>Next</button>
            </div>
        </div>

    );
  }
  
  export default App;
  