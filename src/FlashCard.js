import React, { useState } from "react"
import questions from './data';

export default function FlashCard() {

    
   
    const [index, setIndex] = useState(0)
    const {id, question, answer, explanation, flipped} = questions[index]
     const [flashCard, setFlashCard ] = useState(flipped)

    

  const nextQuestion = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
    setFlashCard(false)
     console.log(flashCard)
  }
  
  const prevQuestion = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
    setFlashCard(false)
  }
  
  const checkNumber = (number) => {
    if( number > questions.length - 1 ) {
      return 0
    }
    
    if (number < 0 ) {
      return questions.length - 1
    }
    
    return number
   }
  
  

return (

<>
<div key={id} className={`flash-card ${ flashCard ? "flipped" : ""}`} onClick={()=> setFlashCard(!flashCard)}  >
			
            {/*-------Edit the div above!------------*/}

				<div className="flash-card-inner">
					<div className="flash-card-front">
						<p className="question">{question}</p>
						<ol type="a">
							
						</ol>
					</div>
					<div className="flash-card-back">
						<p className="answer">{answer}</p>
						<p>{explanation}</p>
					</div>
				</div>
    <div className="tip">(Click the card to flip it over and reveal the answer)</div>
</div>
<div className="buttons"> <button onClick={prevQuestion} className="prev-btn">Previous Question
                </button>  
                 <button onClick={nextQuestion} className="next-btn">Next Question</button>
                 </div>
</>

)
}