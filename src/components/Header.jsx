import React, { useState } from 'react'
import QuizLevels from './QuizLevels'

function Header() {
    const [start, setStart] = useState(false)

  return (
    <>
        <h1 className={`header-text`}>QUIZ APP</h1>
        <p>This quiz app tests your knowledge on the world's most random but very basic things. </p>
        <p>There are three different levels - Easy, Medium, Hard. Choose the level that most befits your IQ.</p>
        <button onClick={()=>setStart(!start)} className={`btn ${start? 'stop-btn':'start-btn'} animate__animated animate__pulse animate__infinite`}>{start ? 'Stop':'Start'}</button>  
        {start && <QuizLevels />} 
    </>
  )
}

export default Header