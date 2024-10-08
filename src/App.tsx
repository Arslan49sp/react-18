import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad"];
  const handleSelectItem = (item: string) => console.log(item);
  return (
    <div>
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
