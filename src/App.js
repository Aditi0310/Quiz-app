import React, { useEffect, useState } from 'react'
import './App.css'
import FirstPage from './pages/firstPage'
import QuizPage from './pages/quizPage'

function App() {
  const [pageFirst, setPage] = useState(true);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("https://80e1c9dc-5b7e-456b-b769-3c3a19369586.mock.pstmn.io/getQues")
    .then(res => console.log(res.body))
    .catch(err => console.log("Couldn't able to fetch the data due to the error", err))
  },[])

  return (
    <div className='mainContainer'>
      {
        pageFirst ? 
        <div>
          <FirstPage/>
          <button className='start-button' onClick={() => setPage(false)}>Start</button>
        </div> : <QuizPage/>
      }
      
    </div>
  );
}

export default App;
