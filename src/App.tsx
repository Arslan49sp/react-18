import { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
function App() {
  const [cartItems, setCartItems] = useState(["Condoms", "Delay Spray"]);
  return (
    <div>
      <Navbar cartItemCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
