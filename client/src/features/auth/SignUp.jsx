import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { InputError } from "../../components/InputError";

export const SignUp = () => {
  const { register, getValues, formState, handleSubmit } = useForm();
  const { errors } = formState;

  //login to create new user
  function handleSignUp(data) {
    console.log(data);
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="md:w-[30%] sm:w-[60%] w-[90%] border-stone-100 px-5 py-3 border-2"
      >
        <div className="mb-2">
          <label className="input input-bordered flex items-center gap-2">
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
                required: "Email is Required",
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
        </div>{" "}
        <div className="mb-2">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              {...register("username", {
                required: "Username is Required",
              })}
            />
          </label>
          {errors && errors?.username?.message && (
            <InputError errorMessage={errors?.username?.message} />
          )}
        </div>{" "}
        <div className="mb-2">
          <label className="input input-bordered flex items-center gap-2">
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
              placeholder="password"
              {...register("password", {
                required: "Password is Required",
                min: {
                  value: 8,
                  message: "Password Should Atleast 8 characters",
                },
              })}
            />
          </label>
          {errors && errors?.password?.message && (
            <InputError errorMessage={errors?.password?.message} />
          )}
        </div>{" "}
        <div className="mb-2">
          <label className="input input-bordered flex items-center gap-2">
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
              placeholder="Confirm Password"
              {...register("confirmpassword", {
                validate: (value) => {
                  value === getValues().password || "Password nedd to match";
                },
              })}
            />
          </label>
          {errors && errors?.confirmpassword?.message && (
            <InputError errorMessage={errors?.confirmpassword?.message} />
          )}
        </div>{" "}
        <NavLink to="verifyemail">
          <button className="w-full rounded-md bg-stone-900 text-white py-2 my-3 hover:bg-stone-700 transition-colors duration-200">
            Sign Up
          </button>
        </NavLink>
        <p className="text-center mb-3">
          Already have an Account?
          <NavLink className="underline" to="/login">
            {" "}
            Login Now
          </NavLink>
        </p>
      </form>
    </div>
  );
};
