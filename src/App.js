import React, { useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
import { Dashboard as DashboardPage, Login as LoginPage } from "./pages";
import { AuthProvider, AuthContext } from "./context";
function App() {
  return (
    <Container>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <ProtectedRoutes />
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

const ProtectedRoutes = () => {
  const { user } = useContext(AuthContext);
  return user ? (
    <Route exact path="/">
      <DashboardPage />
    </Route>
  ) : (
    <Redirect
      to={{
        pathname: "/login"
        //state: { from: location }
      }}
    />
  );
};

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: var(--primary-bg-color);
`;
