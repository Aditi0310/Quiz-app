import React from 'react'
import Logo from '../images/logo.svg'

function App() {
    return (
        <div className='innerContainer'>
            <div className='logo-container'>
                <img src={Logo} className='logo'/>
            </div>
            <div className='quiz-container'>
                <p style={{color:"#FF3B3C", fontWeight:800, fontSize:"30px"}}>Quiz</p>
            </div>
            
        </div>
    );
  }
  
  export default App;
  