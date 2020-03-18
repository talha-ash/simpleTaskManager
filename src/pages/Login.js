import React, { useContext, useState, useCallback } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context";
import { Card, InputField, Button } from "../components";
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
          imageUrl: data.image
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
    <div className="container h-100vh d-flex justify-content-center align-items-center">
      <Card>
        <h3 class="bold">Login</h3>
        {isLoginError ? <h5>id or name is incorrect</h5> : null}
        <form>
          <InputField
            name="id"
            placeholder="Id"
            value={apiKey}
            onChange={({ target }) => setApiKey(target.value)}
          />
          <InputField
            name="name"
            value={name}
            placeholder="Name"
            onChange={({ target }) => setName(target.value)}
          />
          <Button
            type="button"
            title="Login"
            onClick={() => login({ apiKey, name })}
          />
        </form>
      </Card>
    </div>
  );
};

export default Login;
