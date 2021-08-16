import { ADD_TASKS, CHANGE_TASK, UPDATE_DATA } from '../actions/task.action'

const initialState = {
  tasks: [],
  byIds: {}
}

function taskReducer(state, action) {
  const actState = state ? state : initialState;
  switch (action.type) {
    case ADD_TASKS: {
      const { task } = action.payload;
      const currentid = actState.tasks.length > 0 ? actState.tasks[0] : 0;
      const id = currentid + 1;
      return {
        ...actState,
        tasks: [id,...actState.tasks],
        byIds: {
          ...actState.byIds,
          [id]: {
            task,
            completed: false
          }
        }
      }
    }
    case CHANGE_TASK:
      const { id } = action.payload;
      return {
        ...actState,
        byIds: {
          ...actState.byIds,
          [id]: {
            ...actState.byIds[id],
            completed: !actState.byIds[id].completed
            }
          }
        
      };
    case UPDATE_DATA:
      return {
        ...action.payload.tasks
      };
    default:
      return actState;
  }
}

export default taskReducer;