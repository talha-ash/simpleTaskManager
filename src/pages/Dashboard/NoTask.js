import React from "react";
import { Card, Button } from "../../components";
const Notask = ({ openModal, hasTasks, initialLoad }) => {
  return !initialLoad ? (
    hasTasks ? null : (
      <Card height={15} center middle>
        <h3>You have no task</h3>
        <Button title={"+ New Task"} small onClick={openModal} />
      </Card>
    )
  ) : null;
};

export default Notask;
