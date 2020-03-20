import axios from "axios";
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
export const setinitialLoad = initialLoad => {
  return { type: INITIALLOAD, initialLoad };
};
export const setSearchTask = searchKey => {
  return (dispatch, getState) => {
    const tasks = getState().state.tasks;
    if (searchKey) {
      const searchTasks = tasks.filter(task => {
        if (task.name.includes(searchKey)) {
          return true;
        }
      });
      if (searchTasks) {
        dispatch({ type: SEARCHTASKS, tasks: searchTasks });
      }
    } else {
      dispatch({ type: SEARCHTASKS, tasks: "" });
    }
  };
};

// Async Action
export const getTasks = token => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(
        "https://dev.teledirectasia.com:3092/tasks",

        { headers: { Authorization: `Bearer ${token}` } }
      );

      dispatch(setinitialLoad(false));
      dispatch({ type: ADDTASKS, tasks: data.tasks });
    } catch (error) {
      dispatch({ type: ADDTASKERROR, addTaskError: true });
      dispatch(setinitialLoad(false));
    }
  };
};

export const addNewTask = (taskName, closeModal, token) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        "https://dev.teledirectasia.com:3092/tasks",
        { name: taskName },
        { headers: { Authorization: `Bearer ${token}` } }
      );      
      dispatch({ type: ADDTASK, task: data.task });
      closeModal();
    } catch (error) {
      dispatch({ type: ADDTASKERROR, addTaskError: true });
      closeModal();
    }
  };
};

export const editTask = (taskId, taskName, closeModal, token) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.put(
        "https://dev.teledirectasia.com:3092/tasks/" + taskId,
        { name: taskName },
        { headers: { Authorization: `Bearer ${token}` } }
      );      
      dispatch({ type: EDITTASK, task: data.task });
      closeModal();
    } catch (error) {
      dispatch({ type: ADDTASKERROR, addTaskError: true });
      closeModal();
    }
  };
};

export const changeTaskStatus = (taskId, status, token) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.put(
        "https://dev.teledirectasia.com:3092/tasks/" + taskId,
        { completed: status },
        { headers: { Authorization: `Bearer ${token}` } }
      );      
      dispatch({ type: EDITTASK, task: data.task });
    } catch (error) {
      dispatch({ type: ADDTASKERROR, addTaskError: true });
    }
  };
};

export const deleteTask = (taskId, closeModal, token) => {
  return async (dispatch, getState) => {
    try {
      const {
        data
      } = await axios.delete(
        "https://dev.teledirectasia.com:3092/tasks/" + taskId,
        { headers: { Authorization: `Bearer ${token}` } }
      );      
      dispatch({ type: DELETETASK, taskId });
      closeModal();
    } catch (error) {
      dispatch({ type: ADDTASKERROR, addTaskError: true });
      closeModal();
    }
  };
};

export const getDashboardData = token => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(
        "https://dev.teledirectasia.com:3092/dashboard",
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      //dispatch(setinitialLoad(data.totalTasks > 0 ? false : true));
      dispatch({ ...data, type: DASHBOARDSTATS });
    } catch (error) {
      dispatch({ type: ADDTASKERROR, addTaskError: true });
    }
  };
};
