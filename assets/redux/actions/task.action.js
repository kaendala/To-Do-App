const ADD_TASKS = 'ADD NEW TASK [task]';
const CHANGE_TASK = 'CHANGE STATUS TASK [task]';
const UPDATE_DATA= 'UPDATE DATA TASK [task]'

const addNewTask = (task) => {
  return {
    type: ADD_TASKS,
    payload: {
      task
    }
  };
};
const changeTask = id => ({
  type: CHANGE_TASK,
  payload: { id }
});
const updateTask = tasks => ({
  type: UPDATE_DATA,
  payload: { tasks }
});

export {
  ADD_TASKS,
  CHANGE_TASK,
  UPDATE_DATA,
  addNewTask,
  changeTask,
  updateTask
}