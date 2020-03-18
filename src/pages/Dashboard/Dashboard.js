import React, { useContext, useState } from "react";
import styled from "styled-components";

import { AuthContext } from "../../context";
import { Header, Button } from "../../components";
import { useModal } from "../../hooks";
import useDashboardData from "./UseDashboardData";
import NoTask from "./NoTask";
import { addNewTask } from "./actions";
import TaskModal from "./AddTaskModal";
import TaskList from "./TaskList";
const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const { isOpen, closeModal, openModal } = useModal();
  const { state, dispatch } = useDashboardData();
  const [isTaskCreate, setIsTaskCreate] = useState(false);

  const addTask = taskName =>
    dispatch(addNewTask(taskName, closeModal, user.token));

  const hasTask = state.totalTasks > 0 ? true : false;
  return (
    <DashboardContainer>
      <Header name={user.name} imageUrl={user.imageUrl} handleLogout={logout} />
      <DashboardMain hasTask={hasTask}>
        {state.tasks.length > 0 ? (
          <div>
            <Button onClick={openModal} title={"+ New Task"} />
            <TaskList tasks={state.tasks} user={user} dispatch={dispatch} />
          </div>
        ) : (
          <NoTask openModal={openModal} />
        )}
      </DashboardMain>
      <TaskModal
        title={"+ New Task"}
        isOpen={isOpen}
        closeModal={closeModal}
        onSubmit={addTask}
      />
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const DashboardMain = styled.main`
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;
