import { ADD_TASKS } from '../actions/task.action'

const initialState = {
    tasks: [],
}

function taskReducer(state, action) {
  const actState = state ? state : initialState;
  switch (action.type) {
    case ADD_TASKS:
      return Object.assign({}, actState, {
        tasks: [
          ...actState.tasks,
          action.payload.task
        ]
      })
    default:
      return actState;
  }
}

export default taskReducer;