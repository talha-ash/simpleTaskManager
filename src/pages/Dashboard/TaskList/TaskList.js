import React, { useRef } from "react";
import styled from "styled-components";

import { useModal } from "../../../hooks";
import TaskModal from "../TaskModal";
import { editTask, deleteTask, changeTaskStatus } from "../actions";
import TaskListItem from "./TaskListItem";
import TaskListHeader from "./TaskListHeader";

const TaskList = ({ tasks, user, dispatch, openAddTaskModal, hasTasks }) => {
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
  return hasTasks ? (
    <>
      <TaskListHeader openModal={openAddTaskModal} dispatch={dispatch} />
      <TaskListContainer>
        {tasks.map(task => {
          return (
            <TaskListItem
              key={task._id}
              task={task}
              modifyTaskStatus={modifyTaskStatus}
              removeTask={removeTask}
              selectedTaskRef={selectedTaskRef}
              openModal={openModal}
            />
          );
        })}
        {tasks.length > 0 ? null : <h3>No Task Found</h3>}
        <TaskModal
          title={"Edit Task"}
          isOpen={isOpen}
          closeModal={closeModal}
          onSubmit={modifyTask}
        />
      </TaskListContainer>
    </>
  ) : null;
};

export default React.memo(TaskList);

const TaskListContainer = styled.section`
  width: 100%;
  min-height: 40rem;
  background-color: var(--secondary-bg-color);
  padding: 1rem;
  padding-left: 2rem;

  @media (min-width: 786px) {
    border-radius: 2rem;
    padding: 2rem;
  }
`;
