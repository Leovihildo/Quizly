import React, { useState } from 'react'
import MidLevel from './MidLevel'
import HardLevel from './HardLevel'
import EasyLevel from './EasyLevel'

function QuizLevels() {
    const [level, setLevel] = useState(null)

    const handleSelectedLevel = (selectedLevel) =>{
      setLevel(selectedLevel)
    }
    if (level === 'easy'){
      return <EasyLevel />  
    }
     if (level === 'medium'){
      return <MidLevel />   
    }
     if (level === 'hard'){
      return <HardLevel/>  
    }

    
  return (
    <>
      <div className={`quizLevel`}>
          <h3 className={`smallHeading-text`}>Choose Level</h3>
        <div className={`quiz-levels`}>
            <button onClick={()=> handleSelectedLevel('easy')} className={`btn`}>Easy</button>
            <button onClick={()=> handleSelectedLevel('medium')} className={`btn`}>Medium</button>
            <button onClick={()=> handleSelectedLevel('hard')} className={`btn`}>Hard</button>
        </div>
        </div>
    </>
  )
}

export default QuizLevels