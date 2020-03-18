import React from "react";
import { Card, Button } from "../../components";
const Notask = ({ openModal }) => {
  return (
    <Card>
      <h3>You have no task</h3>
      <Button title={"+ New Task"} onClick={openModal} />
    </Card>
  );
};

export default Notask;
