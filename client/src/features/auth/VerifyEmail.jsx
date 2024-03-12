import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyEmailApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

/* eslint-disable react/no-unescaped-entities */
export const VerifyEmail = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (data) => verifyEmailApi(data),
    onSuccess: () => {
      navigate("/experience");
      toast.success("Registered Successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  //logic to handle login
  function handleOtp(data) {
    mutate(data);
  }
  return (
    <div className="flex flex-col justify-start pt-[15%] items-center h-screen">
      <h1 className=" text-lg font-semibold">
        We've sent you a 6 digit code to your email please verify
      </h1>
      <form
        className="flex w-[60%] md:w-[30%] items-center gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          handleOtp(verificationCode);
        }}
      >
        <input
          type="text"
          placeholder="Enter the 6 digit code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          className="input input-bordered input-md w-full max-w-xs"
        />
        <button
          disabled={!verificationCode || verificationCode.length < 6}
          className="w-full disabled:cursor-not-allowed rounded-md bg-stone-900 text-white py-2 my-3 hover:bg-stone-700 transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
