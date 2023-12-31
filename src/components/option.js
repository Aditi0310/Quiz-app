import React,{useContext, useEffect, useState} from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { makeStyles } from '@mui/styles';
import { QuizContext } from "../context/context";

const useStyles = makeStyles({
    optionComponent:{
        display: "flex",
        alignItems: "center",
        height: "50px",
        backgroundColor: "#f3f4fa",
        borderRadius: "10px",
        width: "260px",
        marginBottom: "5px",
        border:"1px solid grey",
        marginTop:"10px",
        paddingLeft:"15px",
        '&:hover':{
            cursor:"pointer"
        }
    },
    optionComponent2:{
        display: "flex",
        alignItems: "center",
        height: "50px",
        backgroundColor: "#f3f4fa",
        borderRadius: "10px",
        width: "260px",
        marginBottom: "5px",
        border:"1px solid green",
        marginTop:"10px",
        paddingLeft:"15px",
        '&:hover':{
            cursor:"pointer"
        }

        
    }
  });

function Option({option, index}){
    const classes = useStyles();
    const {changedOption, setChangedOption} = useContext(QuizContext);
    useEffect(() => {

    }, [changedOption])
    return(
        <div className={changedOption[index] ? classes.optionComponent2 : classes.optionComponent} >
            {changedOption[index] ? <CheckCircleOutlineIcon style={{color:"green"}}/> : <RadioButtonUncheckedIcon style={{color:"#cccccc"}}/>
             }
            <p style={{marginLeft:"20px"}}>{option}</p>
        </div>
    )
}

export default Option;