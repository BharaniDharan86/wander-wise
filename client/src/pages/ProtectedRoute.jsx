import { useEffect } from "react";
import useToken from "../hooks/useToken";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const token = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      toast("Please Log in To Continue");
      return navigate("/login");
    }
  }, [navigate, token]);

  if (token) return children;
};

export default ProtectedRoute;
