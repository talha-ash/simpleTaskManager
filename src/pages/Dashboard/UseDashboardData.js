import React, { useReducer, useRef, useCallback } from "react";
import axios from "axios";

const initialDashboardState = {
  tasks: [],
  tasksCompleted: 0,
  totalTasks: 0,
  latestTasks: [],
  addTaskError: false
};

const DashboardReducer = (state, action) => {
  switch (action.type) {
    case "addTask":
      state.tasks.push(action.task);
      return { ...state, tasks: [...state.tasks] };
    case "editTask":
      const tasks = state.tasks.map(task => {
        if (task._id == action.task._id) {
          return action.task;
        }
        return task;
      });

      return { ...state, tasks };
    case "deleteTask":
      const filterTasks = state.tasks.filter(task =>
        task._id == action.taskId ? false : true
      );

      return { ...state, tasks: filterTasks };
    case "addTaskError":
      return {
        ...state,
        addTaskError: action.addTaskError || !state.addTaskError
      };
    default:
      return state;
  }
};

const useDashboardData = () => {
  const [state, dispatch] = useReducer(DashboardReducer, initialDashboardState);
  const prevStateRef = useRef();

  const customDispatch = useCallback(action => {
    if (typeof action === "function") {
      action(dispatch, () => prevStateRef.current);
    } else {
      dispatch(action);
    }
  }, []);

  prevStateRef.current = { ...prevStateRef.current, state };
  return {
    state,
    dispatch: customDispatch
  };
};

export default useDashboardData;
