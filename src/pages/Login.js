import React, { useContext, useState, useCallback } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context";

const Login = () => {
  const { user, isLoginError, dispatch } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [apiKey, setApiKey] = useState("");

  const login = async ({ apiKey, name }) => {
    dispatch({ type: "isLoading" });
    try {
      const { data } = await axios.post(
        "https://dev.teledirectasia.com:3092/login",
        {
          name,
          apiKey
        }
      );
      const userInfo = data.token;
      dispatch({
        type: "login",
        user: {
          name: userInfo.name,
          token: userInfo.token,
          imageUrl: data.imageUrl
        }
      });
      dispatch({ type: "isLoading" });
    } catch (error) {
      console.log(error);
      dispatch({ type: "isLoading", isLoading: false });
      dispatch({ type: "isLoginError", isLoginError: true });
    }
  };

  return user ? (
    <Redirect
      to={{
        pathname: "/"
      }}
    />
  ) : (
    <div>
      <h1>Login</h1>
      {isLoginError ? "id or name is incorrect" : ""}
      <form>
        <label>Id</label>
        <input
          name="id"
          value={apiKey}
          onChange={({ target }) => setApiKey(target.value)}
        />
        <label>name</label>
        <input
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <button type="button" onClick={() => login({ apiKey, name })}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
