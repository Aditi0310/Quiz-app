import React, { useContext } from 'react'
import ProgrssComp from '../components/progress'
import { QuizContext } from '../context/context'
import Image1 from '../images/image1.png'
import Progrss from '../components/progress'

function Result(){
    const {start, exit, setStart, setExit} = useContext(QuizContext)
    const handleReset = () => {
        setExit(false);
        setStart(false);
    }
    return(
        <div className='quizContainer'>
            <img src={Image1}/>
            <div className='innerQuizContainer' style={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
                <p style={{fontSize:"20px", fontWeight:800, textAlign:"center", marginTop:"20px"}}>Your result</p>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center", height:"300px"}}>
                    <Progrss index={''} circleRatio={0.75} rot={1/2 + 1/8} width="50%"/>
                    <div style={{backgroundColor:"#e9f7f0", width:"260px", borderRadius:"5px"}}><p style={{opacity:1}}>Correct</p></div>
                    <div style={{backgroundColor:"#ffe8ea", width:"260px", marginTop:"10px"}}><p>Incorrect</p></div>
                </div>
                
                <div style={{marginBottom:"25px", display:"flex", justifyContent:"center"}}><button className='start-button' onClick={handleReset}>Reset</button></div>
                
            </div>
            
        </div>
    )
}

export default Result;