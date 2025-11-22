import React, { useState } from 'react'

function QuestionsCard({question, options, onNext, level, index, questionLength, userScore}) {
    const [selectedOption, setSelectedOption] = useState(false)
    const [answer, setAnswer] = useState("")

    const selectedAnswer = (event)=>{
     setAnswer(event)
    }
    
  return (
     <>
      <div className={`quizLevel`}>
        <h5 className={`smallHeading-text`}>{level}</h5>
        <p>Question {index + 1} of {questionLength}</p>
        <p dangerouslySetInnerHTML={{__html: question}}></p>
          { 
          options.sort(()=> Math.random())
          .map((option, i)=><button dangerouslySetInnerHTML={{__html:option}} className={`btn option`} onClick={()=>{setSelectedOption(true); selectedAnswer(option)}} key={i}></button>)
          }

          <button className={`btn ${selectedOption? `next-btn-active`: `next-btn`}`} onClick={()=>{onNext(); setSelectedOption(false); userScore(answer)}} disabled={!selectedOption}>Next</button>
        </div>
    </>
  )
}

export default QuestionsCard