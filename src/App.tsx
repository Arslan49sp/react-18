import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="success" onClick={() => console.log("clicked")}>
        Hello World
      </Button>
    </div>
  );
}

export default App;
