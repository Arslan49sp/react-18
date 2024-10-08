import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    "Lahore",
    "Karachi",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Mardan",
  ];
  return (
    <div>
      <ListGroup items={items} heading="cities" />
    </div>
  );
}

export default App;
