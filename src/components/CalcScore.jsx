import React from 'react'

function CalcScore({finalScore, total}) {

  return (
    <>
    <div className={`score-board-container`}>
      {finalScore > (total * 0.7) ? 
        <p>Your score is <span className={`score-board`}>{finalScore}/{total}</span><br />Great job! You did very well!<br /></p>:
        <p>Your score is <span className={`score-board`}>{finalScore}/{total}</span><br />There is still room for improvement.<br /></p>
      }
      </div>
    </>
  )
}

export default CalcScore