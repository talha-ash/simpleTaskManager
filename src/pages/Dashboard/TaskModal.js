import React, { useState } from "react";

import { ReactModal, Card, InputField, Button } from "../../components";

const TaskModal = ({ isOpen, closeModal, onSubmit, title }) => {
  const [taskName, setTaskName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    if (isNameValid && taskName) {
      onSubmit(taskName);
    } else {
      setIsNameValid(false);
    }
  };

  const handleChange = e => {
    const { value } = e.target;
    if (value) {
      setTaskName(value);
      setIsNameValid(true);
    } else {
      setTaskName(value);
      setIsNameValid(false);
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      closeModal={closeModal}
      afterOpenModal={() => setTaskName("")}
    >
      <Card width={"100%"}>
        <h3>{title}</h3>
        {isNameValid ? null : <h5 style={{ color: "red" }}>Name Required</h5>}
        <form onSubmit={handleSubmit}>
          <InputField
            name="taskName"
            placeholder="Task Name"
            value={taskName}
            onChange={handleChange}
          />
          <Button
            type="button"
            margin={"0rem"}
            title={title}
            onClick={handleSubmit}
          />
        </form>
      </Card>
    </ReactModal>
  );
};

export default TaskModal;
