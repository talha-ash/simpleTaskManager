import React, { useEffect } from "react";
import { Card, CardContainer } from "../../../components";
import styled from "styled-components";
import { getDashboardData } from "../actions";
import TaskPieChart from "./TaskPieChart";

const DashboardStats = ({ dashboardData, user, dispatch, tasks, hasTasks }) => {
  useEffect(() => {
    dispatch(getDashboardData(user.token));
  }, [tasks]);

  return hasTasks ? (
    <DashboardStatsContainer>
      <DashboardCard height={20} width={38} margin={"2rem"}>
        <h1>Tasks Completed</h1>
        <h1>
          <Superscript>{dashboardData.tasksCompleted}</Superscript>/
          {dashboardData.totalTasks}
        </h1>
      </DashboardCard>
      <DashboardCard height={20} width={38} margin={"2rem"}>
        <h1>Latest Tasks</h1>
        <ul>
          {dashboardData.latestTasks.map(task => {
            return (
              <ListItem completed={task.completed} key={task._id}>
                {task.name}
              </ListItem>
            );
          })}
        </ul>
      </DashboardCard>
      <DashboardCard height={20} width={38} margin={"2rem"} padding={"0"}>
        <TaskPieChart
          completedTask={dashboardData.tasksCompleted}
          totalTasks={dashboardData.totalTasks}
        />
      </DashboardCard>
    </DashboardStatsContainer>
  ) : null;
};
export default React.memo(DashboardStats);

const DashboardStatsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 20rem;
`;

const DashboardCard = styled(CardContainer)`
  @media (max-width: 768px) {
    width: 100%;
    height: 24rem;
    margin: 2rem 0 2rem 0;
    border-radius: 0;
    overflow: scroll;
    text-overflow: ellipsis;
  }
`;

const Superscript = styled.sup`
  font-size: 8rem;
  color: var(--secondary-color);
`;

const ListItem = styled.li`
  text-decoration-line: ${props =>
    props.completed ? "line-through" : "initial"};
  margin-left: 2rem;
`;
