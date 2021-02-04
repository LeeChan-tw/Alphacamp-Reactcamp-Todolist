import React from "react";
import TodoItem from "./TodoItem";
const Todos = ({
  todosProp,
  handleSaveProp,
  handleDoneProp,
  handleDeleteProp,
  updateIsEditProp
}) => (
  <div className="todos">
    {todosProp.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleSaveProp={handleSaveProp}
        handleDoneProp={handleDoneProp}
        handleDeleteProp={handleDeleteProp}
        updateIsEditProp={updateIsEditProp}
      />
    ))}
  </div>
);

export default Todos;
