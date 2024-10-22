import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheeze"] });
  };
  return (
    <div>
      {pizza.name}
      <ul>
        {pizza.toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default App;
