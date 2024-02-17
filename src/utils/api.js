import axios from "axios";
axios.defaults.baseURL = "http://server.test";

export async function initialize(token = "") {
  try {
    const config = {};
    if (token) {
      config.headers = { Authorization: "Bearer " + token };
    }
    const { data } = await axios.get("/misc/initialize", config);
    return data;
  } catch (e) {
    return getError(e);
  }
}

export async function signUp(user) {
  try {
    const { data } = await axios.post("http://server.test/auth/register", user);
    return data;
  } catch (e) {
    return getError(e);
  }
}

export async function login(user) {
  try {
    const { data } = await axios.post("http://server.test/auth/login", user);
    return data;
  } catch (e) {
    return getError(e);
  }
}

function getError(e) {
  if (!e.response) {
    return { success: false, message: "Connection Error" };
  } else {
    return { success: false, message: e.response.data.message };
  }
}
