const TodoItem = props => {
  const initialTodosList = props
  const {title} = initialTodosList
  return (
    <li>
      <h1> {title} </h1>
      <button> Delete </button>
    </li>
  )
}

export default TodoItem
