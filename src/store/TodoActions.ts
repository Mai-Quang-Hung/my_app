import * as actionTypes from "./actionTypes"

export function addTodo(todo: ITodos) {
  const action: ArticleAction = {
    type: actionTypes.ADD_TASK,
    todo,
  }

  return action
}

export function removeTodo(todo: ITodos) {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_TASK,
    todo,
  }
  return action
}

