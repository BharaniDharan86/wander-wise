import { NINJA_API_URL } from "../utils/constants";

export async function setMapView(city) {
  try {
    const response = await fetch(NINJA_API_URL + city, {
      headers: {
        "X-Api-Key": "DuyZhJGvhyKXBfTKTKXM5g==zZC5HVUx5n1GRJDc",
      },
      "Content-Type": "application/json",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
