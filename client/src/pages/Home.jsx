import { NavLink } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import HeroImg from "../images/Hero4.svg";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="grid md:grid-cols-2 grid-cols-1 place-items-center h-[90vh] px-10 font-semibold">
        <div>
          <h1 className="md:text-3xl text-xl md:leading-8 mb-3 leading-6 place-content-center tracking-tight font-semibold ">
            Unleash Your Wanderlust! <br /> Step into a world where every tale
            is an adventure waiting to be shared.
          </h1>
          {/* <p className="text-stone-800 font-medium leading-4 font-semibold">
            Add your unique experiences, ignite inspiration, and become part of
            a vibrant community of travelers
          </p> */}
          <NavLink to="/experience">
            <button className="bg-stone-800 hover:bg-stone-700 transition-all duration-200 md:w-[140px] w-[100px] text-white md:font-bold  font-semibold md:px-2 md:py-4 px-1 py-2 rounded-md my-4">
              Start Now
            </button>
          </NavLink>
        </div>
        <img src={HeroImg} alt="heroimage" />
      </div>
    </div>
  );
};
