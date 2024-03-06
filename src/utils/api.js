import axios from "axios";
import { info } from "sass";
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
  let config = getToken();
  try {
    const { data } = await axios.post(
      "http://server.test/auth/register",
      user,
      config
    );

    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, code: e.response.data.code };
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
  page = 1,
  limit = 6,
  category = "",
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
      return { success: false, message: "Something wrong!" };
    }
  }
}

export async function getCategories(page) {
  try {
    const { data } = await axios.get("http://server.test/categories", {
      params: { page },
    });
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "Something wrong!" };
    }
  }
}

export async function getBlogs(page) {
  try {
    const { data } = await axios.get("http://server.test/blogs", {
      params: { page },
    });
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "Something wrong!" };
    }
  }
}
export async function getBlogById(id){
  try {
    const { data } = await axios.get(`http://server.test/blogs/${id}`);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "There is no blog with this Id!" };
    }
  }
}
export async function getProductById(id) {
  try {
    const { data } = await axios.get(`http://server.test/products/${id}`);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "There is no Product with this Id!" };
    }
  }
}
export async function getCategoryById(id) {
  try {
    const { data } = await axios.get(`http://server.test/categories/${id}`);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "There is no category with this Id!" };
    }
  }
}
export async function getUserById(id) {
  try {
    const { data } = await axios.get(`http://server.test/users/${id}`);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "There is no user with this Id!" };
    }
  }
}

export async function updateCategory(info, id) {
  const config = getToken();
  try {
    const { data } = await axios.put(
      `http://server.test/categories/${id}`,
      info,
      config
    );
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "There is no category with this Id!" };
    }
  }
}

export async function updateUser(info, id) {
  const config = getToken();
  try {
    const { data } = await axios.put(
      `http://server.test/users/${id}`,
      info,
      config
    );
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: "There is no user with this Id!" };
    }
  }
}

export async function removeProductById(id) {
  const config = getToken();
  try {
    const { data } = await axios.delete(
      `http://server.test/products/${id}`,
      config
    );
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: e.response.data.message };
    }
  }
}

export async function createProduct() {
  let config = {};
  if (localStorage.token || sessionStorage.token) {
    const token = localStorage.token || sessionStorage.token;
    config.headers = { Authorization: "Bearer " + token };
  }

  try {
    const { data } = await axios.post("http://server.test/products", config);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: e.response.data.message };
    }
  }
}

export async function createCategory(info) {
  const config = {};
  if (localStorage.token || sessionStorage.token) {
    const token = localStorage.token || sessionStorage.token;
    config.headers = { Authorization: "Bearer " + token };
  }
  try {
    const { data } = await axios.post(
      "http://server.test/categories",
      info,
      config
    );
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      console.log(e.response.data.message);
      return { success: false, message: "This slug  has already selected!" };
    }
  }
}
export async function deleteCategory(id) {
  const config = getToken();
  try {
    const { data } = await axios.delete(
      `http://server.test/categories/${id}`,
      config
    );
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return {
        success: false,
        message: e.response.data.message,
        code: e.response.data.code,
      };
    }
  }
}

export async function getUsers(page) {
  const config = getToken();

  try {
    const { data } = await axios.get("http://server.test/users", config);
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, message: e.response.data.message };
    }
  }
}

export async function removeUserById(id) {
  const config = getToken();
  try {
    const { data } = await axios.delete(
      `http://server.test/users/${id}`,
      config
    );
    return data;
  } catch (e) {
    if (!e.response) {
      return { success: false, message: "Connection Error" };
    } else {
      return { success: false, code: e.response.data.code };
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

function getToken() {
  const config = {};
  if (localStorage.token || sessionStorage.token) {
    const token = localStorage.token || sessionStorage.token;
    config.headers = { Authorization: "Bearer " + token };
    return config;
  }
}
