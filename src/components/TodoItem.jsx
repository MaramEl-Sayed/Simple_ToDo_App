import React from "react";
import { useNavigate } from "react-router-dom";

const TodoItem = ({ todo, onTodoDelete, onTodoComplete }) => {
  const navigate = useNavigate();

  return (
    <div
    className={`alert ${
      todo.completed ? "alert-success" : "alert-secondary"
    } d-flex justify-content-between align-items-center`}>

      <h4
        onClick={() =>
          navigate(`/todo-details/${todo.id}`, {
            state: todo,
          })
        }
      >
        {todo.title}
      </h4>

      <div className="justify-content-right">
        <i className="fa-solid fa-square-check text-success btn fs-3"
           onClick={()=>onTodoComplete(todo.id)}
        ></i>

        <i
          className="fa-solid fa-trash fs-4 text-danger btn"
          onClick={() => onTodoDelete(todo.id)}
        ></i>
      </div>
    </div>
  );
};

export default TodoItem;
