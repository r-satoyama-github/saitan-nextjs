import { createContext, useCallback, useEffect, useRef, useState } from "react";

export const CountStatusContext = createContext({});

export const CountStatusProvider = (props) => {
  const { children } = props;
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [itemHistories, setItemHistories] = useState([]);

  const intervalRef = useRef(null);

  const start = useCallback(() => {
    console.log("Count Start Called");
    if (intervalRef.current !== null) {
      return;
    }
    console.log("Count Start");
    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  }, []);

  const stop = useCallback(() => {
    console.log("Count Stop Called");
    if (intervalRef.current === null) {
      return;
    }
    console.log("Count Stop");
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  return (
    <CountStatusContext.Provider
      value={{
        count,
        setCount,
        seconds,
        setSeconds,
        itemHistories,
        setItemHistories,
        start,
        stop,
      }}
    >
      {children}
    </CountStatusContext.Provider>
  );
};
