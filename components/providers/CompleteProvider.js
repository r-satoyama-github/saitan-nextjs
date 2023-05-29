import { createContext, useState } from "react";

export const CompleteContext = createContext({});

export const CompleteProvider = (props) => {
  const { children } = props;
  const [isComplete, setIsComplete] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <CompleteContext.Provider
      value={{ isComplete, setIsComplete, isPlaying, setIsPlaying }}
    >
      {children}
    </CompleteContext.Provider>
  );
};
