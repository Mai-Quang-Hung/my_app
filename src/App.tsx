import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import './App.css';
import TodoListItem  from "./components/TodoList"
import  AddTodoItem  from "./components/AddTodoItem"
import { addTodo, removeTodo} from "./store/TodoActions"
import { Dispatch } from "redux"

const App: React.FC = () => {
  const articles: ITodos[] = useSelector(
    (state: ArticleState) => state.task,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveArticle = React.useCallback(
    (article: ITodos) => dispatch(addTodo(article)),
    [dispatch]
  )

  return (
    <main>
    <h1>Todo List</h1>
  
      <AddTodoItem saveArticle={saveArticle} />
   

      {articles.map((article: ITodos) => (
        <TodoListItem
            key={article.id}
          
          todos={article}

          removeArticle={removeTodo}
        />
      ))}
  
    </main>
  )
}

export default App