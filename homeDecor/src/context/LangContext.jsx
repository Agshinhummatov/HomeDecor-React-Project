import React, { useState, useEffect, useContext, createContext } from "react";

const LangContext = createContext();

function LangProvider({ children }) {
  const [lang, setLang] = useState("En");
  useEffect(() => {}, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("Context must be used within a LangProvider");
  }
  return context;
}

export { LangProvider, useLang };
