import "./App.css";
import data from "./flashcarddata.json";

function Flashcards() {
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
      <p>{data[0].question}</p>
    </div>
  );
}

function Progressbar() {
  return (
    <div
      style={{
        textAlign: "left",
        border: "2px solid grey",
        borderRadius: "12px",
        marginBottom: "5px",
        paddingLeft: "10px",
      }}
    >
      <p>0%</p>
    </div>
  );
}

function Toolbar() { 
  function showAnswer() {
    alert(data[0].answer);
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "grey", borderRadius: "12px", margin: "5px"}}>
      <div>
        <button style={{background: "none"}}>{"<"} Previous</button>
      </div>
      <div>
        <button style={{background: "none"}} onClick={showAnswer}>Show Answer</button>
      </div>
      <div>
        <button style={{background: "none"}}>Next {">"}</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <h1>Flash Cards</h1>
      <Progressbar />
      <div style={{border: "2px solid grey", borderRadius: "12px"}}>
        <Flashcards />
        <Toolbar />
      </div>
    </>
  );
}
