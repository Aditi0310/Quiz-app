import React, { useContext } from 'react'
import ProgrssComp from '../components/progress'
import { QuizContext } from '../context/context'
import Image1 from '../images/image1.png'
import Progrss from '../components/progress'
import CircleIcon from '@mui/icons-material/Circle';
import { makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    title:{
        fontSize:"20px", 
        fontWeight:800, 
        textAlign:"center", 
        marginTop:"20px"
    },
    middleContainer:{
        display:"flex", 
        flexDirection:"column", 
        justifyContent:"space-between", 
        alignItems:"center", 
        height:"300px"
    },
    greenBox:{
        backgroundColor:"#e9f7f0", 
        width:"260px", 
        borderRadius:"5px", 
        display:"flex", 
        alignItems:"center", 
        paddingLeft:"10px"
    },
    redBox:{
        backgroundColor:"#ffe8ea", 
        width:"260px", 
        marginTop:"10px", 
        display:"flex", 
        alignItems:"center", 
        paddingLeft:"10px"
    },
    buttonContainer:{
        marginBottom:"25px", 
        display:"flex", 
        justifyContent:"center"
    }
})

function Result(){
    const {start, exit, setStart, setExit, score, setScore, questions} = useContext(QuizContext)
    const classes = useStyles();

    //reseting things to start the quiz again
    const handleReset = () => {
        setExit(false);
        setStart(false);
        setScore(0);
    }

    //calculating final percentage here
    const percentage = score/questions.length * 100;
    return(
        <div className='quizContainer'>
            <img src={Image1}/>
            <div className='innerQuizContainer' style={{display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
                <p className={classes.title}>Your result</p>
                <div className={classes.middleContainer}>
                    <Progrss index={''} circleRatio={0.75} rot={1/2 + 1/8} width="65%" type="result" percent={percentage}/>
                    <div className={classes.greenBox}>
                        <CircleIcon sx={{color:"green", fontSize:"17px"}}/>
                        <p style={{paddingLeft:"10px"}}>{score} - Correct</p>
                    </div>
                    <div className={classes.redBox}>
                        <CircleIcon sx={{color:"red", fontSize:"17px"}}/>
                        <p style={{paddingLeft:"10px"}}>{questions.length - score} - Incorrect</p>
                    </div>
                </div>
                
                <div className={classes.buttonContainer}><button className='start-button' onClick={handleReset}>Start Again</button></div>
                
            </div>
            
        </div>
    )
}

export default Result;