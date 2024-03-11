import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export const VerifyEmail = () => {
  const [verificationCode, setVerificationCode] = useState("");
  return (
    <div className="flex flex-col justify-start pt-[15%] items-center h-screen">
      <h1 className=" text-lg font-semibold">
        We've sent you a 6 digit code to your email please verify
      </h1>
      <form className="flex w-[60%] md:w-[30%] items-center gap-3">
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
