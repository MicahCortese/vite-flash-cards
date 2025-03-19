import "./App.css";

function Flashcards() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid black",
        borderRadius: "12px",
        height: "400px",
        width: "600px",
        backgroundColor: "grey",
      }}
    >
      <p>This is the flash card content!</p>
    </div>
  );
}

function Progressbar() {
  return (
    <div
      style={{
        textAlign: "left",
        border: "2px solid black",
        borderRadius: "12px",
        marginBottom: "5px",
        paddingLeft: "10px",
      }}
    >
      <p>0%</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <h1>Flash Cards</h1>
      <Progressbar />
      <Flashcards />
    </>
  );
}
