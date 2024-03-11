import { Login } from "./features/auth/Login";
import { SignUp } from "./features/auth/SignUp";
import { VerifyEmail } from "./features/auth/VerifyEmail";
import { Home } from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import { Experience } from "./pages/Experience";
import ExperienceProvider from "./context/ExperienceContext";
import { PostExperience } from "./pages/PostExperience";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/experience",
    element: (
      <ExperienceProvider>
        <Experience />
      </ExperienceProvider>
    ),
  },
  {
    path: "/register",
    element: <Register />,
    children: [
      {
        path: "",
        element: <SignUp />,
      },
      {
        path: "verifyemail",
        element: <VerifyEmail />,
      },
    ],
  },
  {
    path: "/postexperience",
    element: <PostExperience />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
