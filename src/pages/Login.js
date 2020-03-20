import React, { useContext, useState, useCallback } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context";
import { Card, InputField, Button } from "../components";
import styled from "styled-components";
const Login = () => {
  const { user, isLoginError, dispatch } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [apiKey, setApiKey] = useState("");

  const login = async ({ apiKey, name }) => {    
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
    } catch (error) {            
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
    <LoginContainer id="Login">
      <Card center middle>
        <h3 className="bold">Login</h3>
        {isLoginError ? <h5 style={{color: "red"}}>id or name is incorrect</h5> : null}
        <Form onSubmit={e => e.preventDefault()}>
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
            margin="0"
            onClick={() => login({ apiKey, name })}
          />
        </Form>
      </Card>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
