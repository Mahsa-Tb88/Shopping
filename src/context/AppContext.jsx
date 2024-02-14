import { createContext, useContext, useReducer } from "react";
import { appReducer } from "./appReducer";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [appState, appDispatch] = useReducer(appReducer, {
    user: {},
    isLoading: true,
    LoadignError: false,
    initialized: false,
    initializedError: false,
  });
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
