import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Button, InputField } from "../../../components";
import { setSearchTask } from "../actions";

const TaskListHeader = ({ dispatch, openModal }) => {
  return (
    <TaskListHeaderContainer>
      <h3 style={{ flex: 1 }}>Tasks</h3>
      <TaskListHeaderLeft>
        <InputField
          placeholder={"Search by task name"}
          width={"50%"}
          onChange={e => dispatch(setSearchTask(e.target.value))}
        />
        <Button
          onClick={openModal}
          small
          title={"+ New Task"}
          margin={"0 0 0 1rem"}
        />
      </TaskListHeaderLeft>
    </TaskListHeaderContainer>
  );
};

export default TaskListHeader;
const TaskListHeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 5rem;
  flex-direction: column;
  @media (min-width: 786px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const TaskListHeaderLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
  flex-direction: column;
  @media (min-width: 520px) {
    flex-direction: row;
  }
  @media (min-width: 786px) {
    justify-content: flex-end;
    flex: 2;
    flex-direction: row;
  }
`;
