import { BASE_URL } from "../utils/constants";

export async function loginApi(userCredentials) {
  const response = await fetch(`${BASE_URL}user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userCredentials),
    credentials: "include",
  });

  console.log(response);

  const data = await response.json();

  if (data.status === "Failed") throw new Error(data.message);
  return data;
}

export async function signUpApi(userData) {
  console.log(userData);
  const response = await fetch(`${BASE_URL}user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    credentials: "include",
  });

  const data = await response.json();

  console.log(data);

  if (data.status === "Failed") throw new Error(data.message);

  return data;
}

export async function verifyEmailApi(otp) {
  console.log(otp);
  const response = await fetch(`${BASE_URL}user/verifyemail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ otp: otp }),
    credentials: "include",
  });

  const data = await response.json();

  console.log(data);
  if (data.status === "Failed") throw new Error(data.message);

  return data;
}
