export function appReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "setError":
      return { ...state, initializedError: payload };
    case "setTheme":
      localStorage.theme = payload;
      return { ...state, theme: payload };
    case "setUser":
      return { ...state, user: payload };
    case "setCategories":
      return { ...state, categories: payload };
    case "setInitialized":
      return { ...state, initialized: payload };
    case "logOut":
      delete localStorage.token;
      delete sessionStorage.token;
      return { ...state, user: { ...action, isLoggedIn: false } };
  }
}
