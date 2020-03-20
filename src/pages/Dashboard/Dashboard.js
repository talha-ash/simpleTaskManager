import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { AuthContext } from "../../context";
import { Header } from "../../components";
import { useModal } from "../../hooks";
import useDashboardData from "./UseDashboardData";
import NoTask from "./NoTask";
import { addNewTask, getTasks } from "./actions";
import TaskModal from "./TaskModal";
import TaskList from "./TaskList";
import DashboardStats from "./DashboardStats";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const { isOpen, closeModal, openModal } = useModal();
  const { state, dispatch } = useDashboardData();

  useEffect(() => {
    dispatch(getTasks(user.token));
  }, []);

  const addTask = taskName =>
    dispatch(addNewTask(taskName, closeModal, user.token));
  const hasTasks = state.tasks.length > 0;
  return (
    <DashboardContainer>
      <Header name={user.name} imageUrl={user.imageUrl} handleLogout={logout} />
      <DashboardMain>
        <DashboardStats
          dashboardData={state.dashboardData}
          user={user}
          dispatch={dispatch}
          tasks={state.tasks}
          hasTasks={hasTasks}
        />
        <TaskList
          tasks={state.searchTasks || state.tasks}
          hasTasks={hasTasks}
          user={user}
          openAddTaskModal={openModal}
          dispatch={dispatch}
        />
        <NoTask
          openModal={openModal}
          hasTasks={hasTasks}
          initialLoad={state.initialLoad}
        />
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
  min-height: 90vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem 0rem 3rem 0rem;
  @media (min-width: 560px) {
    padding: 3rem 0 3rem 0;
  }
  @media (min-width: 768px) {
    padding: 3rem 8rem 3rem 8rem;
    justify-content: center;
    align-items: center;
  }
`;
