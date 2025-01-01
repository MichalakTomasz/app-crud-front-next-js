"use client";

import {
  applicationJson,
  userData as USERDATA,
  bearer,
  POST,
  GET,
  DELETE,
  PUT
} from "@services/commonConsts";

export const auth = async (url, authInput) => {
  let data;
  try {
    data = await fetch(url, {
      method: POST,
      headers: { 'Content-Type': applicationJson },
      body: JSON.stringify(authInput),
    });
  } catch (error) {
    console.error("Fetch error:", error);
    data = { isRegistered: false, userId: null, token: null, roles: [] };
  }

  return data?.json();
};

export const getProducts = async (url) => {
  const userData = JSON.parse(sessionStorage.getItem(USERDATA));
  const bearerString = `Bearer ${userData?.token}`;
  const data = await fetch(url, {
    method: GET,
    headers: {
      'Content-Type': applicationJson,
      'Authorization': bearerString
    }
  });
  return data?.json();
};

export const getProduct = async (url, id) => {
  const userData = JSON.parse(sessionStorage.getItem(USERDATA));
  const bearerString = `Bearer ${userData?.token}`;
  const data = await fetch(url + "/" + id, {
    method: GET,
    headers: {
      'Content-Type': applicationJson,
      'Authorization': bearerString
    }
  });

  return data?.json();
};

export const addProduct = async (url, product) => {
  const userData = JSON.parse(sessionStorage.getItem(USERDATA));
  const bearerString = `Bearer ${userData?.token}`;
  const data = await fetch(url, {
    method: POST,
    headers: {
      "Content-Type": applicationJson,
      'Authorization': bearerString,
    },
    body: JSON.stringify(product),
  });

  return data?.json();
};

export const updateProduct = async (url, product) => {
  const userData = JSON.parse(sessionStorage.getItem(USERDATA));
  const bearerString = `Bearer ${userData?.token}`;
  const data = await fetch(url, {
    method: PUT,
    headers: {
      "Content-Type": applicationJson,
      'Authorization': bearerString,
    },
    body: JSON.stringify(product),
  });

  return data?.json();
};

export const deleteProduct = async (url, id) => {
  const userData = JSON.parse(sessionStorage.getItem(USERDATA));
  const bearerString = `Bearer ${userData?.token}`;
  const data = await fetch(url + "/" + id, {
    method: DELETE,
    headers: {
      'Content-Type': applicationJson,
      'Authorization': bearerString,
    },
  });

  return data?.json();
};

export const registerAccount = async (url, inputUser) => {
  const userData = JSON.parse(sessionStorage.getItem(USERDATA));
  const data = await fetch(url, {
    method: POST,
    headers: {
      'Content-Type': applicationJson,
      'Authorization': `${bearer} ${userData?.token}`,
    },
    body: JSON.stringify(inputUser),
  });

  return data?.json();
};

export const deleteAccount = async (url, deleteGuid) => {
  const userData = JSON.parse(sessionStorage.getItem(USERDATA));
  const data = await fetch(url, {
    method: DELETE,
    headers: {
      "Content-Type": applicationJson,
      'Authorization': `${bearer} ${userData?.token}`,
    },
    body: JSON.stringify(deleteGuid),
  });

  return data?.json();
};
