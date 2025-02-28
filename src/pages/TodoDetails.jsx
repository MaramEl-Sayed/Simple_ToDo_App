import React, { useEffect, useState } from "react";
import { useLocation, useParams,useNavigate } from "react-router-dom";

const TodoDetails = () => {
  const [todo, setTodo] = useState();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state);

  useEffect(() => {
    if (params.id) {
      const todos = JSON.parse(localStorage.getItem("todos"));
      const selectedTodo = todos.find((todo) => todo.id === +params.id);
      setTodo(selectedTodo);
    }
  }, [params]);

  return (
    <div className="container mt-5">
      {todo ? (
        <div className="card shadow-lg p-4">
          <h2 className="text-center fw-bold text-primary">{todo.title}</h2>
          <hr />
          <p className="fs-5 text-secondary">{todo.description}</p>
          <div className="mt-3">
            <span
              className={`badge ${
                todo.completed ? "bg-success" : "bg-warning"
              } fs-6`}
            >
              {todo.completed ? "Completed" : "In Progress"}
            </span>
          </div>
          <div className="mt-4 text-center">
            <button className="btn btn-secondary px-4" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-danger">Todo not found.</p>
      )}
    </div>
  );
};


export default TodoDetails;
