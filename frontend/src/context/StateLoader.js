import { useState } from "react";
import { StateContext } from "./StateContext";

const StateLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <StateContext.Provider
      value={{ isLoading, isError, setIsLoading, setIsError }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateLoader;
