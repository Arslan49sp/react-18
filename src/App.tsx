import LIke from "./components/LIke";
function App() {
  return (
    <div>
      <LIke onClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
