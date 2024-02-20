import { createContext, useContext, useEffect, useReducer } from "react";
import { appReducer } from "./appReducer";
import { initialize } from "../utils/api";

const AppContext = createContext();
function AppContextProvider({ children }) {
  const [appState, appDispatch] = useReducer(appReducer, {
    user: {
      isLoggedIn: false,
      isAdmin: false,
      Username: "",
      firstname: "",
      lastname: "",
      role: "",
    },
    theme: "light",
    categories: [],
    initialized: false,
    initializedError: false,
    initializeApp,
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", appState.theme);
  }, [appState.theme]);

  useEffect(() => {
    const timeOut = setTimeout(initializeApp, 20);
    return () => clearTimeout(timeOut);
  }, []);

  async function initializeApp() {
    appDispatch({ type: "setError", payload: false });
    const savedTheme = localStorage.theme === "dark" ? "dark" : "light";
    appDispatch({ type: "setTheme", payload: savedTheme });
    const token = localStorage.token ?? sessionStorage.token;
    const result = await initialize(token);
    if (result.success) {
      const { body } = result;
      if (body.user) {
        const { user } = body;

        user.isAdmin = user.role === "admin";
        user.isLoggedIn = true;
        appDispatch({ type: "setUser", payload: user });
      }
      appDispatch({ type: "setCategories", payload: body.categories });
      appDispatch({ type: "setInitialized", payload: true });
    } else {
      appDispatch({ type: "setError", payload: result.message });
    }
  }
  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppContextProvider, useAppContext };
