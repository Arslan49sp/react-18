import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisiblity] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisiblity(false)}>I am alert</Alert>
      )}
      <Button color="success" onClick={() => setAlertVisiblity(true)}>
        Hello World
      </Button>
    </div>
  );
}

export default App;
