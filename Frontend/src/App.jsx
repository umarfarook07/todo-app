import { useState } from 'react'
function App() {
  const [todo, setTodo] = useState([{
    title: 'Todo 1 is example of todo',
    description: 'Hello',
    isCompleted: true
  }]);
  return (
    <div>
      <TodoComponent title={todo[0].title} description={todo[0].description} />
    </div>
  )
  function TodoComponent(props) {
    return (
      <div>
        <div>{props.title}</div>
        <div>{props.description}</div>
      </div>
    )
  }
}

export default App
