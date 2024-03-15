import { BASE_URL } from "../utils/constants";

export default async function readExperience(token) {
  const request = await fetch(`${BASE_URL}experience?location=`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const response = await request.json();

  return response;
}

export async function likePostApi(postId, token) {
  const request = await fetch(`${BASE_URL}experience/likepost/${postId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const response = await request.json();

  return response;
}

export async function readReply(postId, token) {
  const request = await fetch(`${BASE_URL}replies/${postId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const response = await request.json();

  return response;
}

export async function postReplyApi(postId, reply, token) {
  //reply need to be an object
  const request = await fetch(`${BASE_URL}replies/${postId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reply),
  });

  const response = await request.json();

  return response;
}

export async function postExperience(experience, token) {
  const request = await fetch(`${BASE_URL}experience`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(experience),
  });

  const response = await request.json();

  return response;
}

export async function updateExperience(postId, experience, token) {
  const request = await fetch(`${BASE_URL}experience/${postId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(experience),
  });

  const response = await request.json();

  return response;
}

export async function deleteExperience(postId, token) {
  const request = await fetch(`${BASE_URL}experience/${postId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const response = await request.json();

  return response;
}
