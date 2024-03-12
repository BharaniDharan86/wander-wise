/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { setMapView } from "../services/apiMapView";

const ExperienceContext = createContext();

export default function ExperienceProvider({ children }) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [coords, setCoords] = useState({ lat: 51.505, lng: -0.09 });

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

  async function handleSearch(e, city) {
    e.preventDefault();
    const data = await setMapView(city);
    const lat = data[0].latitude;
    const lng = data[0].longitude;
    setCoords({ lat, lng });
  }

  return (
    <ExperienceContext.Provider
      value={{
        inputRef,
        isFocused,
        searchTerm,
        handleClearSearchTerm,
        setSearchTerm,
        handleSearch,
        coords,
        setCoords,
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
