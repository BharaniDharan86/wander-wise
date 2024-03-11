/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useRef, useState } from "react";

const ExperienceContext = createContext();

export default function ExperienceProvider({ children }) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  function handleClearSearchTerm() {
    setSearchTerm("");
    setIsFocused(false);
  }

  useEffect(() => {
    function focus() {
      setIsFocused(true);
    }
    const blur = () => {
      setIsFocused(false);
    };

    inputRef.current.addEventListener("focus", () => {
      focus();
    });
    inputRef.current.addEventListener("blur", () => blur());
  }, [isFocused]);

  return (
    <ExperienceContext.Provider
      value={{
        inputRef,
        isFocused,
        searchTerm,
        handleClearSearchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
}

export const useExperienceContext = () => {
  const context = useContext(ExperienceContext);

  if (context === undefined) throw new Error("Out of Context");

  return context;
};
