import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { MapView } from "../features/experiences/MapView";
import { ExperienceList } from "../features/experiences/ExperienceList";
import { useQuery } from "@tanstack/react-query";
import readExperience from "../services/apiExperience";
import useToken from "../hooks/useToken";
import { Loader } from "../ui/Loader";
import getUser from "../services/apiUser";

export const Experience = () => {
  const token = useToken();

  const { data: experiences, isLoading: isExperienceLoading } = useQuery({
    queryKey: ["experiences"],
    queryFn: () => readExperience(token),
  });

  const { data: userData, isLoading: isUserLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(token),
  });

  return (
    <div>
      <Navbar />

      <SearchBar />
      <button className="bg-stone-900 hover:bg-stone-800 transition-all duration-150 w-full text-white font-semibold px-2 py-4 fixed left-0 bottom-0">
        Share Your Travel Experience
      </button>
      <main className=" w-full flex items-start gap-2 justify-center px-2 py-10">
        <div className="w-[60%]">
          {isExperienceLoading || isUserLoading ? (
            <Loader />
          ) : (
            <ExperienceList data={experiences} userData={userData} />
          )}
        </div>
        <div className="w-[35%]">
          <MapView />
        </div>
      </main>
    </div>
  );
};
