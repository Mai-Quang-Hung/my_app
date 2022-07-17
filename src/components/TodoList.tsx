import { Dispatch } from "redux"
import * as React from "react"
import { useDispatch } from "react-redux"

type Props = {
  todos: ITodos;
  removeArticle: (todos: ITodos) => void;

}


const TodoListItem: React.FC<Props> = ({ todos, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteArticle = React.useCallback(
    (todos: ITodos) => dispatch(removeArticle(todos)),
    [dispatch, removeArticle]
  )
  const Onclick = function(e:any) {
    if (todos.complete === false) {
      e.target.classList.toggle('checked');
    }
  };
  return (
    <div onClick={Onclick} className="Article">

     {todos.title}
  
      <button  className="btn btn-outline-danger" onClick={() => deleteArticle(todos)}><i className="fa fa-trash" aria-hidden="true"></i></button>
   
   </div>
  )
}

export default TodoListItem