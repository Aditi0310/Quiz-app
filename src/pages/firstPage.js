import React, {useContext} from 'react'
import Logo from '../images/logo.svg'
import { QuizContext } from '../context/context';

function App() {
    const {setStart} = useContext(QuizContext);
    return (
        <div className='innerContainer'>
            <div className='logo-container'>
                <img src={Logo} className='logo'/>
            </div>
            <div className='quiz-image'>
                <p style={{color:"#FF3B3C", fontWeight:800, fontSize:"30px"}}>Quiz</p>
            </div>
            <button className='start-button' onClick={() => setStart(true)}>Start</button>
        </div>
    );
  }
  
  export default App;
  