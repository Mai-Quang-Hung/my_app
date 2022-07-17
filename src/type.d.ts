interface ITodos {
  id: number
  title: string
  complete: boolean,
}

type ArticleState = {
  task: ITodos[]
}

type ArticleAction = {
  type: string
  todo: ITodos
}

type DispatchType = (args: ArticleAction) => ArticleAction
