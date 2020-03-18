import React, { useState } from "react";

import { ReactModal, Card, InputField, Button } from "../../components";

const TaskModal = ({ isOpen, closeModal, onSubmit, title }) => {
  const [taskName, setTaskName] = useState("");
  const handleSubmit = () => {
    onSubmit(taskName);
  };
  return (
    <ReactModal isOpen={isOpen} closeModal={closeModal}>
      <Card>
        <h3>{title}</h3>
        <form>
          <InputField
            name="taskName"
            placeholder="Task Name"
            value={taskName}
            onChange={e => {
              setTaskName(e.target.value);
            }}
          />
          <Button type="button" title={title} onClick={handleSubmit} />
        </form>
      </Card>
    </ReactModal>
  );
};

export default TaskModal;
