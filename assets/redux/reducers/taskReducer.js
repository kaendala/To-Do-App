import { ADD_TASKS, CHANGE_TASK } from '../actions/task.action'

const initialState = {
  tasks: [],
  byIds: {}
}

function taskReducer(state, action) {
  const actState = state ? state : initialState;
  switch (action.type) {
    case ADD_TASKS: {

      const { id, task } = action.payload;
      return {
        ...actState,
        tasks: [...actState.tasks, id],
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
      debugger
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
    default:
      return actState;
  }
}

export default taskReducer;