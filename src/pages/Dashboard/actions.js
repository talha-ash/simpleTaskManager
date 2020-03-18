import axios from "axios";

export const addNewTask = (taskName, closeModal, token) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.post(
        "https://dev.teledirectasia.com:3092/tasks",
        { name: taskName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(data);
      dispatch({ type: "addTask", task: data.task });
      closeModal();
    } catch (error) {
      dispatch({ type: "addTaskError", addTaskError: true });
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
      console.log(data);
      dispatch({ type: "editTask", task: data.task });
      closeModal();
    } catch (error) {
      dispatch({ type: "addTaskError", addTaskError: true });
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
      console.log(data);
      dispatch({ type: "editTask", task: data.task });
    } catch (error) {
      dispatch({ type: "addTaskError", addTaskError: true });
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
      console.log(data);
      dispatch({ type: "deleteTask", taskId });
      closeModal();
    } catch (error) {
      dispatch({ type: "addTaskError", addTaskError: true });
      closeModal();
    }
  };
};
