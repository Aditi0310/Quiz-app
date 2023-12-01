import React, { useContext, useEffect, useState } from 'react'
import Logo from '../images/logo.svg'
import Option from '../components/option'
import Image1 from '../images/image1.png'
import Progress from '../components/progress'
import { QuizContext } from '../context/context'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    progressContainer:{
        position:"absolute", 
        marginTop:"50px", 
        display:"flex", 
        alignItems:"center", 
        justifyContent:"center", 
        zIndex:10, 
        marginLeft:"40px"
    },
    questionContainer:{
        fontWeight:600, 
        textAlign:"center", 
        marginTop:"50px", 
        marginBottom:"20px"
    }
})

function App() {
    const classes = useStyles();
    const [index, setIndex] = useState(0);

    const [ans, setAns] = useState([]);

    const {score, setScore, exit, setExit,changedOption, setChangedOption, questions, setQuestions} = useContext(QuizContext);


   
    const checkCorrect = () => {
        // check if every selected ans is correct or not, if all of them is not 
        // correct, it won't count towards scoring point
        let arr = questions[index].answer;
        
        ans.sort();
        if(ans.length != arr.length) return -1;
        for(let i=0 ; i<arr.length ; i++){
            if(arr[i] != ans[i]) return -1;
        }
        return 1;
        
    }
    const update = async () => {
        // updating after button change
        let answer = await checkCorrect();
        console.log("ans-", answer);
        if(answer == 1) setScore(score+1);
        if(index+1 == questions.length){
            setExit(true);
        }
        else{
            setIndex(index+1);
            
        }
        setAns([]);
        setChangedOption([false, false, false, false, false]);
    }
   
    const checkAnswer =  (index) => {
        //updating array
       const newArr = changedOption.map((m, i) => {
        if(i == index){
            return !m;
        }
        else{
            return m;
        }
       });
       
       console.log(newArr);
       setChangedOption(newArr);
       ans.push(index);
    }
    return (
        
        <div className='quizContainer'>
            
            <img src={Image1}/>
            <div className={classes.progressContainer}>
                <Progress index={index} circleRatio={1} width="27%" type="quiz"/>
            </div>
            <div className='innerQuizContainer' style={{display:"flex", flexDirection:"column", alignItems:"center", paddingLeft:"15px", paddingRight:"15px"}}>
                <p className={classes.questionContainer} >{questions[index].question}</p>
                
                {questions[index].image ? <img src={questions[index].image} style={{width:"150px"}}/> : null}
                {questions[index]?.options.map((option, i) => (
                    <div key={i} onClick={() => checkAnswer(i)}>
                        <Option option={option} index={i} />
                        
                    </div>
                ))}
                
                
                <button className='quiz-button' onClick={update}>Next</button>
            </div>
        </div>

    );
  }
  
  export default App;
  