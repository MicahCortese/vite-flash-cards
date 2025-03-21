import "./App.css";

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
      <p>Card Content goes here!</p>
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
  return (
    <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "grey", borderRadius: "12px", margin: "5px"}}>
      <div>
        <button style={{background: "none"}}>{"<"} Previous</button>
      </div>
      <div>
        <button style={{background: "none"}}>Show Answer</button>
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
