import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('');
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo}/>
      <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>
    </div>
  );
}

export default App;
