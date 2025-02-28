import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onTodoDelete, onTodoComplete }) => {

  return (
    <>
      {todos.map((todo) => (
        <TodoItem todo={todo} 
        key={todo.id} 
        onTodoDelete={onTodoDelete} 
        onTodoComplete={onTodoComplete}/>
      ))}
    </>
  );
};

export default TodoList;
