import React from "react";
import styled from "styled-components";

import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";
import { ReactComponent as BinIcon } from "../../../assets/icons/bin.svg";

const TaskListItem = ({
  task,
  modifyTaskStatus,
  openModal,
  selectedTaskRef,
  removeTask
}) => {
  return (
    <TaskListItemContainer>
      <TaskListItemLeft>
        <input
          type="checkbox"
          id="vehicle1"
          name="completed"
          value={"task completed"}
          checked={task.completed}
          onChange={e => modifyTaskStatus(task._id, e.target.checked)}
          style={{ marginRight: "0.5rem" }}
        />
        <h3
          style={{
            textDecorationLine: task.completed ? "line-through" : "initial"
          }}
        >
          {task.name}
        </h3>
      </TaskListItemLeft>
      <TaskListItemRight>
        <EditIcon
          style={{ marginRight: "1rem" }}
          onClick={() => {
            openModal();
            selectedTaskRef.current = task._id;
          }}
        />
        <BinIcon
          onClick={() => {
            removeTask(task._id);
          }}
        />
      </TaskListItemRight>
    </TaskListItemContainer>
  );
};

export default TaskListItem;
const TaskListItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const TaskListItemLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const TaskListItemRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
