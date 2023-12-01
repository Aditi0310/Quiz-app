import React, { useContext } from 'react'
import ProgrssComp from '../components/progress'
import { QuizContext } from '../context/context'
import Image1 from '../images/image1.png'
import Progrss from '../components/progress'
import CircleIcon from '@mui/icons-material/Circle';

function Result(){
    const {start, exit, setStart, setExit, score, setScore, questions} = useContext(QuizContext)
    const handleReset = () => {
        setExit(false);
        setStart(false);
        setScore(0);
    }

    const percentage = score/5 * 100;
    return(
        <div className='quizContainer'>
            <img src={Image1}/>
            <div className='innerQuizContainer' style={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
                <p style={{fontSize:"20px", fontWeight:800, textAlign:"center", marginTop:"20px"}}>Your result</p>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center", height:"300px"}}>
                    <Progrss index={''} circleRatio={0.75} rot={1/2 + 1/8} width="65%" type="result" percent={percentage}/>
                    <div style={{backgroundColor:"#e9f7f0", width:"260px", borderRadius:"5px", display:"flex", alignItems:"center", paddingLeft:"10px"}}>
                        <CircleIcon sx={{color:"green", fontSize:"17px"}}/>
                        <p style={{paddingLeft:"10px"}}>{score} - Correct</p>
                    </div>
                    <div style={{backgroundColor:"#ffe8ea", width:"260px", marginTop:"10px", display:"flex", alignItems:"center", paddingLeft:"10px"}}>
                        <CircleIcon sx={{color:"red", fontSize:"17px"}}/>
                        <p style={{paddingLeft:"10px"}}>{questions.length - score} - Incorrect</p>
                    </div>
                </div>
                
                <div style={{marginBottom:"25px", display:"flex", justifyContent:"center"}}><button className='start-button' onClick={handleReset}>Start Again</button></div>
                
            </div>
            
        </div>
    )
}

export default Result;