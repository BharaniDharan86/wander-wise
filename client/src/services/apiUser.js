import { BASE_URL } from "../utils/constants";

export default async function getUser(token) {
  const request = await fetch(`${BASE_URL}user`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const response = await request.json();

  return response;
}
