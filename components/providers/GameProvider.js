import { createContext, useState } from "react";

export const GameContext = createContext({});

export const GameProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState("");

  return (
    <GameContext.Provider value={{ user, setUser }}>
      {children}
    </GameContext.Provider>
  );
};
