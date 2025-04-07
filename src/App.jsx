import "./App.css";
import { useState } from "react";

/* Component Hierarchy

  * App()
    * FlashCardContainer()
      * ProgressBar() 
      * CardContent()
      * ToolBar()

*/

// Contains the entire app
export default function App() { 
  return (
    <>
      <h1>Flash Cards</h1>
      <FlashCardContainer carddata={CARDDATA} />
    </>
  );
}

// Displays the progress of the flash card deck
function ProgressBar({ currentIndex, maxIndex}) {
  const percentage = Math.round((currentIndex / maxIndex) * 100);

  return (
    <div
      style={{
        margin: "5px",
      }}
    >
      <div
        style={{
          height: "40px",
          width: "100%",
          backgroundColor: "lightgrey",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${percentage}%`,
            backgroundColor: "grey",
            textAlign: "right",
            color: "white",
            //paddingRight: "5px",
            borderRadius: "12px",
            transition: "width 0.3s ease"
          }}
        >
          <div
            style={{
              position: "relative",
              top: "7px",
              right: "10px"
            }}
          >
            {percentage}%
          </div>
        </div>
      </div>
    </div>
  );
}

function FlashCardContainer({ carddata }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isQuestion, setIsQuestion] = useState(true);
  
  const handleToggle = () => {
    setIsQuestion(!isQuestion);
  }

  const nextCard = () => {
    if (currentIndex < carddata.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsQuestion(true);
    }
  }

  const previousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsQuestion(true);
    }
  }

  return (
    <div>
      <ProgressBar currentIndex={currentIndex + 1} maxIndex={carddata.length} />
      <CardContent card={carddata[currentIndex]} isQuestion={isQuestion} />
      <ToolBar onToggle={handleToggle} onNext={nextCard} onPrevious={previousCard} />
    </div>
  )
}

// Displays the flash card data
function CardContent({ card, isQuestion }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        height: "400px",
        width: "600px",
        backgroundColor: "grey",
        margin: "5px"
      }}
    >
      <p>{isQuestion ? card.question : card.answer}</p>
    </div>
  );
}

// Receives the user input
function ToolBar({ onToggle, onNext, onPrevious }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "grey", borderRadius: "12px", margin: "5px"}}>
        <div>
          <button style={{background: "none"}} onClick={onPrevious}>{"<"} Previous</button>
        </div>
        <div>
          <button style={{background: "none"}} onClick={onToggle}>Show Answer</button>
        </div>
        <div>
          <button style={{background: "none"}} onClick={onNext}>Next {">"}</button>
        </div>
      </div>
    </div>
  );
}

const CARDDATA = [
  {id: 1, question: "What is React?", answer: "React is a JavaScript library for building user interfaces, primarily used for developing single-page applications."},
  {id: 2, question: "What is JSX in React?", answer: "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript."},
  {id: 3, question: "What is a component in React?", answer: "A component in React is a reusable piece of UI that can be either a function or a class."},
  {id: 4, question: "What is the difference between functional and class components?", answer: "Functional components are simple JavaScript functions that return JSX, while class components are ES6 classes that extend React.Component and can manage state."},
  {id: 5, question: "What is state in React?", answer: "State is an object that holds data that may change over time, allowing components to be dynamic and interactive."}
];