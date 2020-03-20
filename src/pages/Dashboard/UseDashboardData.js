import { useReducer, useRef, useCallback } from "react";
import {
  ADDTASK,
  ADDTASKERROR,
  DASHBOARDSTATS,
  ADDTASKS,
  DELETETASK,
  EDITTASK,
  INITIALLOAD,
  SEARCHTASKS
} from "./constants";
const initialDashboardState = {
  tasks: [],
  searchTasks: "",
  dashboardData: {
    tasksCompleted: 0,
    totalTasks: 0,
    latestTasks: []
  },
  addTaskError: false,
  initialLoad: true
};

const DashboardReducer = (state, action) => {
  switch (action.type) {
    case DASHBOARDSTATS:
      return {
        ...state,
        dashboardData: {
          tasksCompleted: action.tasksCompleted,
          totalTasks: action.totalTasks,
          latestTasks: action.latestTasks
        }
      };
    case ADDTASKS:
      return { ...state, tasks: action.tasks };
    case ADDTASK:
      state.tasks.push(action.task);
      return { ...state, tasks: [...state.tasks] };
    case EDITTASK:
      const tasks = state.tasks.map(task => {
        if (task._id == action.task._id) {
          return action.task;
        }
        return task;
      });

      return { ...state, tasks };
    case DELETETASK:
      const filterTasks = state.tasks.filter(task =>
        task._id == action.taskId ? false : true
      );

      return { ...state, tasks: filterTasks };
    case SEARCHTASKS:
      return { ...state, searchTasks: action.tasks };
    case ADDTASKERROR:
      return {
        ...state,
        addTaskError: action.addTaskError || !state.addTaskError
      };
    case INITIALLOAD:
      return { ...state, initialLoad: action.initialLoad };
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
