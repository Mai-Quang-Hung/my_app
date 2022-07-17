import * as actionTypes from "./actionTypes"

const initialState: ArticleState = {
  task: [],
}
const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {

  switch (action.type) {


    case actionTypes.ADD_TASK:

      const newTask: ITodos = {
        id: Math.random(), // tạo random id
        title: action.todo.title,
        complete: false,
      }
      return {
        ...state,
        task: state.task.concat(newTask),
      }


    case actionTypes.REMOVE_TASK:

      const DeleteTask: ITodos[] = state.task.filter(
        todo => todo.id !== action.todo.id
      )
      return {
        ...state,
        task: DeleteTask,
      }
  }
  return state
}

export default reducer