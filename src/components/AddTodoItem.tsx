import * as React from "react"


type Props = {
  saveArticle: (article: ITodos | any) => void
}

 const AddTodoItem: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = React.useState<ITodos | {}>()

  const handleArticleData = (e: any) => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value,
    })

  }
  
  const addNewArticle = (e: any) => {   
    e.preventDefault()
    saveArticle(article)
   
  }

  return (
    <form className="Add-article">
      <input
      required
        type="text"
        id="title"
        placeholder="Input Task  ✒️"
        onChange={handleArticleData}
     />
      <button type="submit" disabled={article === undefined ? true : false}  onClick={addNewArticle} >
        Add
      </button> 

    </form>
  ) 
}
export default AddTodoItem