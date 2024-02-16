import axios from "axios";
axios.defaults.baseURL = SERVER_URL;
export async function initialize(token = "") {
  try {
    let config = {};
    if (token) {
      config.headers = { Autorization: "Bearer ", token };
    }
    const { data } = await axios.get("/misc/initialize", config);
    return data;
  } catch (e) {
    return getError(e);
  }
}

function getError(e) {
  if (e.response) {
    return { success: false, message: "Connection Error" };
  } else {
    return { success: false, message: e.response.data.message };
  }
}
