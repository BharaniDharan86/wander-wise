import { NavLink } from "react-router-dom";
import useToken from "../hooks/useToken";
import UserNavbar from "../features/users/UserNavbar";

export const Navbar = () => {
  const token = useToken();
  return (
    <div className=" border-2 border-slate-100 z-20">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Wander Wise</a>
        </div>

        {token ? (
          <div className="navbar-end flex gap-4">
            <UserNavbar />
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};
