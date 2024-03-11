import { HiOutlineX } from "react-icons/hi";
import { useExperienceContext } from "../context/ExperienceContext";

export const SearchBar = () => {
  const {
    isFocused,
    inputRef,
    searchTerm,
    setSearchTerm,
    handleClearSearchTerm,
  } = useExperienceContext();

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[60%] mt-10">
        <label
          className={`input input-bordered flex ${
            isFocused ? "scale-[1.02]" : ""
          } items-center gap-2 transition-all duration-150 focus:ring-red-400`}
        >
          <input
            type="text"
            className="grow placeholder:font-semibold"
            placeholder="Search Place"
            ref={inputRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleClearSearchTerm}>
            <HiOutlineX />
          </button>
        </label>
      </div>
    </div>
  );
};
