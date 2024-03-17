import { useCookies } from "react-cookie";
import { HiArrowRightOnRectangle, HiMiniUserCircle } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const [cookies, setCookies, removeCookies] = useCookies();
  const navigate = useNavigate();

  function sighOut() {
    removeCookies("access_token");
    navigate("/login");
  }
  return (
    <div className="flex gap-2 items-center">
      <NavLink to="/user">
        <HiMiniUserCircle />
      </NavLink>

      <HiArrowRightOnRectangle onClick={sighOut} />
    </div>
  );
};

export default UserNavbar;
