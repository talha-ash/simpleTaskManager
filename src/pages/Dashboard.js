import React, { useContext } from "react";
import { AuthContext } from "../context";

const Dashboard = () => {
  const { dispatch } = useContext(AuthContext);
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => dispatch({ type: "logout" })}>Logout</button>
    </div>
  );
};

export default Dashboard;
