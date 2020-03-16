import React, { useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Dashboard as DashboardPage, Login as LoginPage } from "./pages";
import { AuthProvider, AuthContext } from "./context";
function App() {
  return (
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
