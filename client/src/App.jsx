import { Login } from "./features/auth/Login";
import { SignUp } from "./features/auth/SignUp";
import { VerifyEmail } from "./features/auth/VerifyEmail";
import { Home } from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import { Experience } from "./pages/Experience";
import ExperienceProvider from "./context/ExperienceContext";
import { PostExperience } from "./pages/PostExperience";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostExperienceForm from "./features/experiences/PostExperienceForm";
import User from "./pages/User";
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
      <ProtectedRoute>
        <ExperienceProvider>
          <Experience />
        </ExperienceProvider>
      </ProtectedRoute>
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
  {
    path: "/post",
    element: <PostExperienceForm />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{
            margin: "8px",
          }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
          }}
        />
        <RouterProvider router={router} />;
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
