import React, { useEffect, useState , useContext} from 'react'
import './App.css'
import FirstPage from './pages/firstPage'
import QuizPage from './pages/quizPage'
import { QuizContext } from './context/context'
import Result from './pages/resultPage'

function App() {
  const [pageFirst, setPage] = useState(true);
  const [questions, setQuestions] = useState([]);
  const {start, exit} = useContext(QuizContext);
  useEffect(() => {
    fetch("https://80e1c9dc-5b7e-456b-b769-3c3a19369586.mock.pstmn.io/getQues")
    .then(function(res) {
      return res.json()
    })
    .then(function(res) {
      console.log(res)
    })
    .catch(err => console.log("Couldn't able to fetch the data due to the error", err))
  },[])

  return (
    <div className='mainContainer'>
      {exit ? <Result/> : start ? <QuizPage/> : <FirstPage/>}
      
        
    </div>
  );
}

export default App;
