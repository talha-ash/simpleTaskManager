import React, { createContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
  user: "",
  isLoading: false,
  isLoginError: false
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "login":
      const { user } = action;
      localStorage.setItem("user", JSON.stringify(user));
      return { ...state, user };
    case "logout":
      localStorage.setItem("user", "");
      return { ...state, user: "" };
    case "isLoading":
      return {
        ...state,
        isLoading: action.isLoading || !state.isLoading
      };
    case "isLoginError":
      return {
        ...state,
        isLoginError: action.isLoginError || !state.isLoginError
      };
    default:
      return state;
  }
};

const isLoggedIn = () => {
  const user = JSON.parse(localStorage.getItem("user") || "[]");
  if (user?.token) {
    return user;
  }
};

const AuthProvider = props => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const user = isLoggedIn();
  if (user && !state.user) {
    dispatch({ type: "login", payload: { user } });
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        state,
        dispatch,
        isLoginError: state.isLoginError
      }}
      {...props}
    />
  );
};

export { AuthProvider, AuthContext };
