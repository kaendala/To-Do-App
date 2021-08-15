const ADD_TASKS = 'ADD NEW TASK [task]';

const addNewTask = task => {
  return {
    type: ADD_TASKS,
    payload: { task },
  };
};

export {
    ADD_TASKS,
    addNewTask
}