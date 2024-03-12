/* eslint-disable react/no-unescaped-entities */
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputError } from "../../components/InputError";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
export const Login = () => {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (userCredentials) => {
      loginApi(userCredentials);
    },
    onSuccess: () => {
      navigate("/experience");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  //logic to handle login
  function handleLogin(data) {
    mutate(data);
  }

  return (
    <div
      className=" flex justify-center items-center h-screen"
      onSubmit={handleSubmit(handleLogin)}
    >
      <form className="md:w-[30%] sm:w-[60%] w-[90%] border-stone-100 px-5 py-3 border-2">
        <div className="my-2">
          <label className="input input-bordered flex items-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              {...register("email", {
                required: "This Field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Provide Valid Email",
                },
              })}
            />
          </label>
          {errors && errors?.email?.message && (
            <InputError errorMessage={errors?.email?.message} />
          )}
        </div>
        <div className="my-2">
          <label className="input input-bordered flex items-center gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Password"
              {...register("password")}
            />
          </label>
          {errors && errors?.email?.message && (
            <InputError errorMessage={errors?.password?.message} />
          )}
        </div>
        <button className="w-full rounded-md bg-stone-900 text-white py-2 my-3 hover:bg-stone-700 transition-colors duration-200">
          Login
        </button>
        <p className="text-center mb-3">
          New to Wander Wise?
          <NavLink className="underline" to="/register">
            {" "}
            Sign Up Now
          </NavLink>
        </p>
      </form>
    </div>
  );
};
