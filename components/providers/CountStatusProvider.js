import { createContext, useState } from "react";

export const CountStatusContext = createContext({});

export const CountStatusProvider = (props) => {
  const { children } = props;
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  return (
    <CountStatusContext.Provider
      value={{ count, setCount, isComplete, setIsComplete }}
    >
      {children}
    </CountStatusContext.Provider>
  );
};
