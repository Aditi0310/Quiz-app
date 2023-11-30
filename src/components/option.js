import React,{useState} from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    optionComponent:{
        display: "flex",
        alignItems: "center",
        height: "50px",
        backgroundColor: "#f3f4fa",
        borderRadius: "10px",
        width: "85%",
        marginBottom: "10px",
        border:"1px solid grey",
        
    },
    optionComponent2:{
        display: "flex",
        alignItems: "center",
        height: "50px",
        backgroundColor: "#f3f4fa",
        borderRadius: "10px",
        width: "85%",
        marginBottom: "10px",
        border:"1px solid green"
    }
  });

function Option({option}){
    const classes = useStyles();
    const [changed, setChanged] = useState(false);
    return(
        <div className={changed ? classes.optionComponent2 : classes.optionComponent} onClick={() => setChanged(!changed)}>
            {changed ? <CheckCircleOutlineIcon style={{color:"green"}}/> : <RadioButtonUncheckedIcon style={{color:"#cccccc"}}/>
             }
            <p>{option}</p>
        </div>
    )
}

export default Option;