import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategoy] = useState("");
  return (
    <div>
      <select
        className="form-select w-50"
        onChange={(event) => setCategoy(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Laundery">Laundering</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App;
