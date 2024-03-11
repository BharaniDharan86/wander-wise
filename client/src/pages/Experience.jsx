import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { data } from "../data";
import { MapView } from "../features/experiences/MapView";
import { ExperienceList } from "../features/experiences/ExperienceList";

export const Experience = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <main className=" w-full flex items-start gap-2 justify-center px-2 py-10">
        <div className="w-[60%]">
          <ExperienceList data={data} />
        </div>
        <div className="w-[35%]">
          <MapView />
        </div>
      </main>
    </div>
  );
};
