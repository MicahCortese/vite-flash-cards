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
  return;
}

export default function App() {
  return Flashcards();
}
