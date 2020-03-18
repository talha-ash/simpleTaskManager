import React, { useRef } from "react";
import styled from "styled-components";

import { useModal } from "../../hooks";
import TaskModal from "./AddTaskModal";

import { editTask, deleteTask, changeTaskStatus } from "./actions";

const TaskList = ({ tasks, user, dispatch }) => {
  const { isOpen, closeModal, openModal } = useModal();
  const selectedTaskRef = useRef();
  const modifyTask = taskName =>
    dispatch(
      editTask(selectedTaskRef.current, taskName, closeModal, user.token)
    );
  const removeTask = taskId =>
    dispatch(deleteTask(taskId, closeModal, user.token));

  const modifyTaskStatus = (taskId, status) =>
    dispatch(changeTaskStatus(taskId, status, user.token));
  return (
    <TaskListContainer>
      {tasks.map(task => {
        return (
          <div key={task._id} style={{ display: "flex", flexDirection: "row" }}>
            <input
              type="checkbox"
              id="vehicle1"
              name="completed"
              value={"task completed"}
              checked={task.completed}
              onChange={e => modifyTaskStatus(task._id, e.target.checked)}
            ></input>
            <h1>{task.name}</h1>
            <h1
              onClick={() => {
                openModal();
                selectedTaskRef.current = task._id;
              }}
            >
              Edit
            </h1>
            <h1 onClick={() => removeTask(task._id)}>delete</h1>
          </div>
        );
      })}
      <TaskModal
        title={"Edit Task"}
        isOpen={isOpen}
        closeModal={closeModal}
        onSubmit={modifyTask}
      />
    </TaskListContainer>
  );
};

export default TaskList;

const TaskListContainer = styled.section`
  width: 80%;
  min-height: 40rem;
`;
