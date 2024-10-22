import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Arslan" } });
  };
  return (
    <div>
      {game.player.name}
      <button onClick={handleClick}>update</button>
    </div>
  );
}

export default App;
