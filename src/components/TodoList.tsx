import React from 'react'
import { Todo } from '../model';
import './styles.css'
import TodoCard from './TodoCard';

type Props = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}) => {

  return (
    <div className="container">
        <div className="todos">
            <span className="todos__heading">Active Tasks</span>
            {todos.map((todo) => (
                <TodoCard key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
            ))}
        </div>
        {/* <div className="todos remove">
            <span className="todos__heading">Completed Tasks</span>
            {completedTodos.map((todo, index) => (
                <TodoCard index={index} key={todo.id} todo={todo} todos={completedTodos} setTodos={setCompletedTodos}/>
            ))}
        </div> */}
    </div>
  )
}

export default TodoList