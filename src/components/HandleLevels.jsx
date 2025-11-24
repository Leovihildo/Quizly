import axios from 'axios'
import React, { useEffect, useState } from 'react'
import QuestionsCard from './QuestionsCard'
import CalcScore from './CalcScore'

function HandleLevels({difficulty}) {
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(()=>{
    const fetchQuestions = async ()=>{
      try{
        const resp = await axios.get(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`)
        setQuestions(resp.data.results)
      }
      catch (err){
        console.log('Error fetching data '+ err)
      }
    }

    fetchQuestions()
  }, [difficulty])

  if (questions.length === 0) return <p>Loading...</p>

  
  const currentQstn = questions[index]
  const currentOptions = [...currentQstn.incorrect_answers, currentQstn.correct_answer]  

  const nextQuestion = ()=>{
      
    if (index < (questions.length - 1))
      {
        const moveToNext = () => setTimeout(()=>{
          setIndex(index + 1)
        }, 2000)
        moveToNext();
      }
    else{
      const finishedQuiz = () => setTimeout(() => {
        setIsFinished(true)
      }, 2000)
      
      finishedQuiz();
    } 
  }

  const calcScore = (answer)=>{
    let options = document.querySelectorAll('.option')
    if (answer === currentQstn.correct_answer){
      options.forEach(option =>{
        if (option.innerHTML === answer){
          option.classList.add("correct-option",
            "animate__animated",
            "animate__pulse",
            "animate__infinite",
            "disabled-btn")
          const btnColour = () => setTimeout(()=>{
            option.classList.remove("correct-option",
            "animate__animated",
            "animate__pulse",
            "animate__infinite",
            "disabled-btn")
          }, 1900)
          btnColour();
        }
      })
      setScore(prev=> prev+1)
    }  
    else{
       options.forEach(option =>{
        if (option.innerHTML === answer){
          option.classList.add("wrong-option",
            "animate__animated",
            "animate__pulse",
            "animate__infinite",
            "disabled-btn")
          const btnColour = () => setTimeout(() => {
            option.classList.remove("wrong-option",
            "animate__animated",
            "animate__pulse",
            "animate__infinite",
            "disabled-btn")
          }, 1900);
         btnColour(); 
        }
      })
    } 
  }
  
  return (
    <>
      {isFinished ? 
      <CalcScore 
      finalScore={score}
      total={questions.length}/> :
      
      <QuestionsCard 
      question={currentQstn.question}
      options={currentOptions} 
      onNext={nextQuestion}
      level={`${difficulty.toUpperCase()} LEVEL`}
      index={index}
      questionLength={questions.length}
      userScore = {calcScore}
      />}
    </>
   
  )
}

export default HandleLevels