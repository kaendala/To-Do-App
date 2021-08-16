const ADD_TASKS = 'ADD NEW TASK [task]';
const CHANGE_TASK = 'CHANGE STATUS TASK [task]';

let nextTodoId = 0;
const addNewTask = task => {
  return {
    type: ADD_TASKS,
    payload: {
    id: ++nextTodoId,
    task
  }
  };
};
const changeTask = id => ({
  type: CHANGE_TASK,
  payload: { id }
});

export {
  ADD_TASKS,
  CHANGE_TASK,
  addNewTask,
  changeTask
}