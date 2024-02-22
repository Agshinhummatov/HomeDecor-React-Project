import React, { useState, useEffect, useContext, createContext } from "react";

const BasketCountContext = createContext();

function BasketCountProvider({ children }) {
  const [basketCount, setBasketCount] = useState(0);
  useEffect(() => {}, [basketCount]);

  return (
    <BasketCountContext.Provider value={{ basketCount, setBasketCount }}>
      {children}
    </BasketCountContext.Provider>
  );
}

function useBasketCount() {
  const context = useContext(BasketCountContext);
  if (!context) {
    throw new Error("Context must be used within a LangProvider");
  }
  return context;
}

export { BasketCountProvider, useBasketCount };
