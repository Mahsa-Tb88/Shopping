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

export async function register(user) {
  try {
    const { data } = await axios.post("http://server.test/auth/register", user);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "Username is already exist" };
    }
  }
}

export async function login(user) {
  try {
    const { data } = await axios.post("http://server.test/auth/login", user);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "Username or Password is not true!" };
    }
  }
}

export async function getAllCategories() {
  try {
    const { data } = await axios.get("http://server.test/categories");
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "somethin wrong!" };
    }
  }
}

export async function getProducts(
  page,
  limit,
  category,
  q = "",
  sort = "id",
  order = "desc"
) {
  try {
    const { data } = await axios.get("http://server.test/products", {
      params: { page, limit, category, q, sort, order },
    });
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "somethin wrong!" };
    }
  }
}

export async function getProductById(id) {
  try {
    const { data } = await axios.get(`http://server.test/products"+${id}`);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "There is no Product with this Id!" };
    }
  }
}

function getError(e) {
  if (!e.response) {
    return { success: false, message: "Connection Error" };
  } else {
    return { success: false, message: e.response.data.message };
  }
}
