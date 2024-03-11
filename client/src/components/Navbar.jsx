import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Wander Wise</a>
        </div>

        <div className="navbar-end flex gap-4">
          <NavLink to="/register" className="btn btn-sm md:btn-md">
            Sign Up
          </NavLink>
          <NavLink
            to="/login"
            className="btn btn-sm md:btn-md bg-slate-900 text-white"
          >
            Login
          </NavLink>
        </div>
      </div>
    </>
  );
};
